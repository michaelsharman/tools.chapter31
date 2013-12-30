<?php

$routes = array_merge_recursive($routes, [
    'get' => [
        '/' => [
            'view'   => 'home.php',
            'active' => 'home'
        ],

        '/about' => [
            'view'   => 'about.php',
            'active' => 'about'
        ],

        '/base64' => [
            'view'   => 'base64.php',
            'active' => 'base64'
        ],

        '/browser' => [
            'view'   => 'browser.php',
            'active' => 'browser'
        ],

        '/entitize' => [
            'view'   => 'entitize.php',
            'active' => 'entitize'
        ],

        '/factorial' => [
            'view'   => 'factorial.php',
            'active' => 'factorial'
        ],

        '/keycode' => [
            'view'   => 'keycode.php',
            'active' => 'keycode'
        ],

        '/lettercount' => [
            'view'   => 'character_count.php',
            'active' => 'lettercount'
        ],

        '/markdown' => [
            'view'   => 'markdown.php',
            'active' => 'markdown'
        ],

        '/percent' => [
            'view'   => 'percent.php',
            'active' => 'percent'
        ],

        '/powerset' => [
            'view'   => 'powerset.php',
            'active' => 'powerset'
        ],

        '/samplecontent' => [
            'view'   => 'samplecontent.php',
            'active' => 'samplecontent'
        ],

        '/striptags' => [
            'view'   => 'strip_tags.php',
            'active' => 'striptags'
        ],

        '/stopwatch' => [
            'view'   => 'stopwatch.php',
            'active' => 'stopwatch'
        ],

        '/tidy' => [
            'view'   => 'tidy.php',
            'active' => 'tidy'
        ],

        '/uuid' => [
            'view'   => 'uuid.php',
            'active' => 'uuid'
        ],

        '/weather' => [
            'view'   => 'weather.php',
            'active' => 'weather'
        ]
    ]
]);
