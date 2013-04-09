<?php

//GET routes
$app->get('/', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'home', 'paths' => $paths));
	$app->render('home.php');
	$app->render('includes/footer.php');
});

$app->get('/about', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'about', 'paths' => $paths));
	$app->render('about.php');
	$app->render('includes/footer.php');
});

$app->get('/base64', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'base64', 'paths' => $paths));
	$app->render('base64.php');
	$app->render('includes/footer.php');
});

$app->get('/browser', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'browser', 'paths' => $paths));
	$app->render('browser.php');
	$app->render('includes/footer.php');
});

$app->get('/entitize', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'entitize', 'paths' => $paths));
	$app->render('entitize.php');
	$app->render('includes/footer.php');
});

$app->get('/factorial', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'factorial', 'paths' => $paths));
	$app->render('factorial.php');
	$app->render('includes/footer.php');
});

$app->get('/keycode', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'keycode', 'paths' => $paths));
	$app->render('keycode.php');
	$app->render('includes/footer.php');
});

$app->get('/lettercount', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'lettercount', 'paths' => $paths));
	$app->render('character_count.php');
	$app->render('includes/footer.php');
});

$app->get('/markdown', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'markdown', 'paths' => $paths));
	$app->render('markdown.php');
	$app->render('includes/footer.php');
});

$app->get('/percent', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'percent', 'paths' => $paths));
	$app->render('percent.php');
	$app->render('includes/footer.php');
});

$app->get('/powerset', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'powerset', 'paths' => $paths));
	$app->render('powerset.php');
	$app->render('includes/footer.php');
});

$app->get('/striptags', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'striptags', 'paths' => $paths));
	$app->render('strip_tags.php');
	$app->render('includes/footer.php');
});

$app->get('/stopwatch', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'stopwatch', 'paths' => $paths));
	$app->render('stopwatch.php');
	$app->render('includes/footer.php');
});

$app->get('/tidy', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'tidy', 'paths' => $paths));
	$app->render('tidy.php');
	$app->render('includes/footer.php');
});

$app->get('/uuid', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'uuid', 'paths' => $paths));
	$app->render('uuid.php');
	$app->render('includes/footer.php');
});

$app->get('/weather', function() use ($app, $paths) {
	$app->render('includes/header.php', array('active' => 'weather', 'paths' => $paths));
	$app->render('weather.php');
	$app->render('includes/footer.php');
});
