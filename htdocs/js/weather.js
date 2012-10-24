var TOOLS = TOOLS || {};

TOOLS.weather = (function($,TOOLS,navigator) {
	'use strict';

	var apiKey = 'ba88605103040608122410',
		days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

	/**
	* Uses the geoplugin to retrieve location information for the current user
	* See more at http://www.geoplugin.com/quickstart
	*/
	function getLocation() {
		var loc = {
			city: geoplugin_city(),
			region: geoplugin_region(),
			countryName: geoplugin_countryName(),
			latitude: geoplugin_latitude(),
			longitude: geoplugin_longitude()
		};
		return loc;
	}

	function getWeather(location) {
		var url = 'http://free.worldweatheronline.com/feed/weather.ashx?callback=render',
			options = {
				extra: 'localObsTime',
				format: 'JSON',
				includeLocation: 'yes',
				key: apiKey,
				num_of_days: 2,
				q: [location.city, location.region, location.countryName].join(',')
			};
		$.ajax({
			url: url,
			contentType: 'application/json',
			data: options,
			dataType: 'jsonp',
			jsonp: false,
			cache: false,
			global: false,
			jsonpCallback: 'render',
			ajaxSend: $('#frmWeather').append('<img src="/img/ajax-loader.gif" alt="loading..." class="loader" />')
		})
		.done(function(data) {
			$('#frmWeather > .loader').hide();
			render(data);
		})
		.fail(function(jqXHR, textStatus, errorThrown) {
			// TODO: Implement decent error handling
		});
	}

	function render(data) {
		var weather = data.data,
			nearestArea = weather.nearest_area[0].areaName[0].value,
			d_now = new Date(weather.current_condition[0].localObsDateTime.replace('-', ',')),
			d_today = new Date(weather.weather[0].date.replace('-', ',')),
			d_tomorrow = new Date(weather.weather[1].date.replace('-', ',')),
			weatherTomorrow = weather.weather[1];
			/*nearestArea = weather.nearest_area[0].areaName[0].value,
			today = new Date(weather.current_condition[0].localObsDateTime.replace('-', ',')),
			future1 = new Date(weather.weather[0].date.replace('-', ',')),
			future2 = new Date(weather.weather[1].date.replace('-', ',')),
			weatherTomorrow = (future1.getDate() === future2.getDate()) ? weather.weather[0] : weather.weather[1],
			tomorrow = new Date(weatherTomorrow.date.replace('-', ','));*/

		$('#city').html(getLocation().city);
		$('#region').html('(' + nearestArea + ')');
		$('#now-temp').html(weather.current_condition[0].temp_C);
		$('#now-temp-desc').html(weather.current_condition[0].weatherDesc[0].value);
		$('#today-temp').html(weather.weather[0].tempMaxC);
		$('#today-temp-desc').html(' (' + weather.weather[0].weatherDesc[0].value + ')');
		$('#tomorrow-day').html(days[d_tomorrow.getDay()]);
		$('#tomorrow-temp').html(weatherTomorrow.tempMaxC);
		$('#tomorrow-temp-desc').html(' (' + weatherTomorrow.weatherDesc[0].value +')');

		$('div.results').show();
	}

	$(function() {

		getWeather(getLocation());

	});

}(jQuery,TOOLS,navigator));