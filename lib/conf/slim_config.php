<?php

$app = new \Slim\Slim(array(
	'mode'				=> APPMODE,
	'templates.path'	=> $config['paths']['views'],
	'view' 				=> '\Slim\LayoutView',
	'layout' 				=> 'layouts/main.php'
));

$app->configureMode('production', function() use ($app, $config) {
	$app->config(array(
		'debug' 		=> false,
		'log.enable'		=> true,
		'log.level'		=> \Slim\Log::INFO
	));
});

$app->configureMode('development', function() use ($app, $config) {
	$app->config(array(
		'debug'			=> true,
		'log.enable'		=> true,
		'log.level'		=> \Slim\Log::DEBUG
	));
});
