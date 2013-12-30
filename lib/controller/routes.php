<?php

$routes = [];
$input = array_merge_recursive($_GET, $_POST);

// Setup all possible routes
require $config['paths']['lib'] . '/controller/routes.api.php';
require $config['paths']['lib'] . '/controller/routes.pages.php';

// Google App Engine doesn't have PATH_INFO, set it from PHP_SELF
$_SERVER['PATH_INFO'] = str_replace('/index.php', '', $_SERVER['PHP_SELF']);

// Set to `/` for the homepage
if (empty($_SERVER['PATH_INFO'])) {
    $_SERVER['PATH_INFO'] = '/';
}

// Defaults
$responseMeta = [
    'layout' => 'main.php',
    'route'  => $_SERVER['PATH_INFO']
];

if (is_callable($routes['get'][$responseMeta['route']]) && is_object($routes['get'][$responseMeta['route']])) {
    $response = $routes['get'][$responseMeta['route']]();
} else {
    $response = array_merge_recursive($responseMeta, $routes['get'][$responseMeta['route']]);
    require_once $config['paths']['layouts'] . '/' . $response['layout'];
}

