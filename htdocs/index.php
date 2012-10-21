<?php

// use markdown for tasks

switch ($_SERVER["SERVER_NAME"])
{
	case "tools.chapter31.local":
	case "casper.rs.af.cm":
		//ini_set("display_errors", 1);
		//error_reporting(E_ALL|E_STRICT);
		define("APPMODE", "development");
		define("TO_EMAIL", "sharmo@gmail.com");
		$libpath = '../lib';
		break;

	default:
		define("APPMODE", "production");
		define("TO_EMAIL", "sharmo@gmail.com");
		$libpath = $_SERVER['NFSN_SITE_ROOT'] . '/protected/lib';
		break;
}

require $libpath . '/conf/app_config.php';
require $libpath . '/conf/slim_config.php';
require $libpath . '/controller/routes.php';