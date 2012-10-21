<?php

$app = new Slim(array(
	'mode'				=> APPMODE,
	'templates.path'	=> $paths['views']
));

$app->configureMode('production', function() use ($app, $paths) {
	$app->config(array(
		'debug' 		=> false,
		'log.enable'		=> true,
		'log.path'		=> $paths['log'],
		'log.level'		=> 4
	));
});

$app->configureMode('development', function() use ($app, $paths) {
	$app->config(array(
		'debug'			=> true,
		'log.enable'		=> true,
		'log.path'		=> $paths['log'],
		'log.level'		=> 4
	));
});

?>