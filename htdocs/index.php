<?php

switch ($_SERVER["SERVER_NAME"])
{
	case "tools.chapter31.local":
		define("APPMODE", "development");
		define("TO_EMAIL", "sharmo@gmail.com");
		ini_set("display_errors", 1);
		error_reporting(E_ALL|E_STRICT);
		$libpath = '../lib';
		$vendorpath = '../vendor';
		break;

	default:
		define("APPMODE", "production");
		define("TO_EMAIL", "sharmo@gmail.com");
		$libpath = $_SERVER['NFSN_SITE_ROOT'] . '/protected/lib';
		$vendorpath = $_SERVER['NFSN_SITE_ROOT'] . '/protected/vendor';
		break;
}

require $vendorpath . '/autoload.php';

require $libpath . '/conf/app_config.php';
require $libpath . '/conf/slim_config.php';
require $libpath . '/controller/routes.php';
