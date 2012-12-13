<?php

$paths = array(
	"assets"		=> "/static/",
	"docroot"	=> $_SERVER["DOCUMENT_ROOT"],
	"lib"		=> $libpath,
	"log"		=> "../log",
	"packages"	=> "$libpath/packages",
	"slim"		=> "$libpath/packages/com/slimframework/1.6.2/Slim",
	"views"		=> "$libpath/views",
	"www"		=> "/"
);

require_once $paths['slim'] . '/Slim.php';