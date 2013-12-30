<?php

use \chapter31\App;

date_default_timezone_set('UTC');

require '../vendor/autoload.php';

switch ($_SERVER["SERVER_NAME"])
{
    case "tools.chapter31.local":
    case "localhost":
        define("APPMODE", "development");
        ini_set("display_errors", 1);
        error_reporting(E_ALL|E_STRICT);
        break;

    default:
        define("APPMODE", "production");
        break;
}

$config = [
    'paths' => [
        'assets'             => '/static/',
        'docroot'            => '/',
        'lib'                => '../lib',
        'packages'           => '../lib/packages',
        'layouts'            => '../lib/views/layouts',
        'views'              => '../lib/views',
        'vendor'             => '../vendor',
        'www'                => '/'
    ],
    'simulateProduction' => !false, // leave the bang, having true|false reads better but we compare against the opposite value
    'appName'            => 'tools.chapter31.com',
    'version'            => '2.1.0'
];

require_once $config['paths']['lib'] . '/controller/routes.php';
