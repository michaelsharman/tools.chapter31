var TOOLS = TOOLS || {};

TOOLS.browser = (function($,_,document,window) {
	'use strict';

	function getDocHeight() {
		return Math.max(
			$(document).height() ,
			$(window).height(),
			/* For opera: */
			document.documentElement.clientHeight
		);
	}

	function getDocWidth() {
		return Math.max(
			$(document).width() ,
			$(window).width(),
			/* For opera: */
			document.documentElement.clientWidth
		);
	}

	$(function() {
		var t = $('#tmpl-browser').html(),
			content,
			browser = {
				userAgent: window.navigator.userAgent
			};

		content = _.template(t, browser);

		$('#browser').html(content);
		console.log(window.navigator, window.screen, getDocHeight(), getDocWidth());

/*if (navigator.javaEnabled()){
document.write("Yes !</td></tr>");
if(navigator.appName != "Microsoft Internet Explorer") {
vartool=java.awt.Toolkit.getDefaultToolkit();
addr=java.net.InetAddress.getLocalHost();
host=addr.getHostName();
ip=addr.getHostAddress();
document.write("<tr><td>Host Name: </td><td><center>");
document.write("<b>",host,"</td></tr>");
document.write("<tr><td>IP Address: </td><td><center>");
document.write("<b>",ip,"</td></tr>");
}
}
else document.write("No!</td></tr>")
document.write("<tr><td>Screen Resolution: </td><td><center>");
document.write("<b>",screen.width," x ",screen.height,"</td></tr>");*/

	});

}(jQuery,_,document,window));