<?php

//GET routes
$app->get('/', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'home', 'config' => $config));
	$app->render('home.php');
	$app->render('includes/footer.php');
});

$app->get('/about', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'about', 'config' => $config));
	$app->render('about.php');
	$app->render('includes/footer.php');
});

$app->get('/base64', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'base64', 'config' => $config));
	$app->render('base64.php');
	$app->render('includes/footer.php');
});

$app->get('/browser', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'browser', 'config' => $config));
	$app->render('browser.php');
	$app->render('includes/footer.php');
});

$app->get('/entitize', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'entitize', 'config' => $config));
	$app->render('entitize.php');
	$app->render('includes/footer.php');
});

$app->get('/factorial', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'factorial', 'config' => $config));
	$app->render('factorial.php');
	$app->render('includes/footer.php');
});

$app->get('/keycode', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'keycode', 'config' => $config));
	$app->render('keycode.php');
	$app->render('includes/footer.php');
});

$app->get('/lettercount', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'lettercount', 'config' => $config));
	$app->render('character_count.php');
	$app->render('includes/footer.php');
});

$app->get('/markdown', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'markdown', 'config' => $config));
	$app->render('markdown.php');
	$app->render('includes/footer.php');
});

$app->get('/percent', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'percent', 'config' => $config));
	$app->render('percent.php');
	$app->render('includes/footer.php');
});

$app->get('/powerset', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'powerset', 'config' => $config));
	$app->render('powerset.php');
	$app->render('includes/footer.php');
});

$app->get('/striptags', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'striptags', 'config' => $config));
	$app->render('strip_tags.php');
	$app->render('includes/footer.php');
});

$app->get('/stopwatch', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'stopwatch', 'config' => $config));
	$app->render('stopwatch.php');
	$app->render('includes/footer.php');
});

$app->get('/tidy', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'tidy', 'config' => $config));
	$app->render('tidy.php');
	$app->render('includes/footer.php');
});

$app->get('/uuid', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'uuid', 'config' => $config));
	$app->render('uuid.php');
	$app->render('includes/footer.php');
});

$app->get('/weather', function() use ($app, $config) {
	$app->render('includes/header.php', array('active' => 'weather', 'config' => $config));
	$app->render('weather.php');
	$app->render('includes/footer.php');
});
