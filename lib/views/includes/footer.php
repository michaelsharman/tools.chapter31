			</div>
		</section>
	</div>
</div>

<footer>
	<p>&copy; <?php echo date("Y"); ?></p>
</footer>

<?php if (APPMODE === 'development' && $config['simulateProduction']) { ?>
<script src="<?php echo $config['paths']['assets']; ?>js/_libs/jquery/jquery.min.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/_main.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/string.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/character_count.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/base64.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/keycode.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/markdown.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/tidy.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/entitize.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/factorial.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/percent.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/powerset.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/strip_tags.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/stopwatch.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/uuid.js"></script>
<script src="<?php echo $config['paths']['assets']; ?>js/weather.js"></script>
<?php } else { ?>
<script src="<?php echo $config['paths']['assets']; ?>dist/<?php echo $config['appName'] . '-' . $config['version'] ?>.min.js"></script>
<?php } ?>
</body>
</html>
