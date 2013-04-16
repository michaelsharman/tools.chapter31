<?php

$app = new Slim(array(
	'mode'				=> APPMODE,
	'templates.path'	=> $config['paths']['views']
));

$app->configureMode('production', function() use ($app, $config) {
	$app->config(array(
		'debug' 		=> false,
		'log.enable'		=> true,
		'log.path'		=> $config['paths']['log'],
		'log.level'		=> 4
	));
});

$app->configureMode('development', function() use ($app, $config) {
	$app->config(array(
		'debug'			=> true,
		'log.enable'		=> true,
		'log.path'		=> $config['paths']['log'],
		'log.level'		=> 4
	));
});

?>
