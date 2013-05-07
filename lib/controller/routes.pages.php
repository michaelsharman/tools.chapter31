<?php

//GET routes
$app->get('/', function() use ($app, $config) {
	$app->render('home.php', array('active' => 'home', 'config' => $config));
});

$app->get('/about', function() use ($app, $config) {
	$app->render('about.php', array('active' => 'about', 'config' => $config));
});

$app->get('/base64', function() use ($app, $config) {
	$app->render('base64.php', array('active' => 'base64', 'config' => $config));
});

$app->get('/browser', function() use ($app, $config) {
	$app->render('browser.php', array('active' => 'browser', 'config' => $config));
});

$app->get('/entitize', function() use ($app, $config) {
	$app->render('entitize.php', array('active' => 'entitize', 'config' => $config));
});

$app->get('/factorial', function() use ($app, $config) {
	$app->render('factorial.php', array('active' => 'factorial', 'config' => $config));
});

$app->get('/keycode', function() use ($app, $config) {
	$app->render('keycode.php', array('active' => 'keycode', 'config' => $config));
});

$app->get('/lettercount', function() use ($app, $config) {
	$app->render('character_count.php', array('active' => 'lettercount', 'config' => $config));
});

$app->get('/markdown', function() use ($app, $config) {
	$app->render('markdown.php', array('active' => 'markdown', 'config' => $config));
});

$app->get('/percent', function() use ($app, $config) {
	$app->render('percent.php', array('active' => 'percent', 'config' => $config));
});

$app->get('/powerset', function() use ($app, $config) {
	$app->render('powerset.php', array('active' => 'powerset', 'config' => $config));
});

$app->get('/striptags', function() use ($app, $config) {
	$app->render('strip_tags.php', array('active' => 'striptags', 'config' => $config));
});

$app->get('/stopwatch', function() use ($app, $config) {
	$app->render('stopwatch.php', array('active' => 'stopwatch', 'config' => $config));
});

$app->get('/tidy', function() use ($app, $config) {
	$app->render('tidy.php', array('active' => 'tidy', 'config' => $config));
});

$app->get('/uuid', function() use ($app, $config) {
	$app->render('uuid.php', array('active' => 'uuid', 'config' => $config));
});

$app->get('/weather', function() use ($app, $config) {
	$app->render('weather.php', array('active' => 'weather', 'config' => $config));
});
