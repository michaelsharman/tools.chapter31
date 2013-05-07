<?php

// Read the grunt package file to get package defaults (symlink to lib/conf so we can read from prod)
$gruntJSON = file_get_contents($libpath . "/conf/package.json");
$gruntPackage = json_decode($gruntJSON, true);

$config = array(
	"appName" => $gruntPackage['name'],
	"paths" => array(
		"assets"		=> "/static/",
		"docroot"	=> $_SERVER["DOCUMENT_ROOT"],
		"lib"		=> $libpath, // see htdocs/index.php
		"log"		=> "../log",
		"packages"	=> "$libpath/packages",
		"views"		=> "$libpath/views",
		"www"		=> "/"
	),
	"simulateProduction" => !false, // leave the bang, having true|false reads better but we compare against the opposite value
	"version" => $gruntPackage['version']
);
