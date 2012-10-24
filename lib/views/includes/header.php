<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>chapter31 tools - letter, word count and markdown parsing</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php if (APPMODE === 'development') { ?>
	<link rel="stylesheet" href="<?= $paths['assets']; ?>css/_libs/bootstrap/bootstrap.custom.css">
	<link rel="stylesheet" href="<?= $paths['assets']; ?>css/main.css">
	<?php } else { ?>
	<link rel="stylesheet" href="<?= $paths['assets']; ?>dist/ch31tools_0.9.min.css">
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-306772-2']);
		_gaq.push(['_setDomainName', 'chapter31.com']);
		_gaq.push(['_trackPageview']);
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
	<?php } ?>
</head>

<body>

<header class="side-bar">
	<nav>
		<ul class="nav">
			<li<?php if ($active === 'entitize') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>entitize">Entitize</a></li>
			<li<?php if ($active === 'factorial') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>factorial">Factorial</a></li>
			<li<?php if ($active === 'keycode') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>keycode">Keycode</a></li>
			<li<?php if ($active === 'tidy') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>tidy">(X)HTML Tidy</a></li>
			<li<?php if ($active === 'lettercount') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>lettercount">Letter/Word count</a></li>
			<li<?php if ($active === 'markdown') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>markdown">Markdown</a></li>
			<li<?php if ($active === 'percent') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>percent">Percentages</a></li>
			<li<?php if ($active === 'powerset') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>powerset">Powerset</a></li>
			<li<?php if ($active === 'striptags') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>striptags">Strip Tags</a></li>
			<li<?php if ($active === 'stopwatch') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>stopwatch">Stopwatch</a></li>
			<li<?php if ($active === 'uuid') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>uuid">UUID Generator</a></li>
			<li<?php if ($active === 'weather') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>weather">Weather</a></li>
		</ul>
	</nav>
</header>

<section class="main">
	<div id="message"></div>
	<nav class="top-bar">
		<ul class="nav">
			<li><a href="http://chapter31.com/" target="_blank">Blog</a></li>
			<li<?php if ($active === 'about') { ?> class="active"<?php } ?>><a href="<?= $paths['www']; ?>about">About</a></li>
			<li<?php if ($active === 'home') { ?> class="active"<?php } ?>><a href="/">Home</a></li>
		</ul>
	</nav>