			</div>
		</section>
	</div>
</div>

<footer>
	<p>&copy; <?php echo date("Y"); ?></p>
</footer>

<?php if (APPMODE === 'development') { ?>
<script src="<?php echo $paths['assets']; ?>js/_libs/jquery/jquery.min.js"></script>
<script src="<?php echo $paths['assets']; ?>js/string.js"></script>
<script src="<?php echo $paths['assets']; ?>js/character_count.js"></script>
<script src="<?php echo $paths['assets']; ?>js/keycode.js"></script>
<script src="<?php echo $paths['assets']; ?>js/markdown.js"></script>
<script src="<?php echo $paths['assets']; ?>js/tidy.js"></script>
<script src="<?php echo $paths['assets']; ?>js/entitize.js"></script>
<script src="<?php echo $paths['assets']; ?>js/factorial.js"></script>
<script src="<?php echo $paths['assets']; ?>js/percent.js"></script>
<script src="<?php echo $paths['assets']; ?>js/powerset.js"></script>
<script src="<?php echo $paths['assets']; ?>js/strip_tags.js"></script>
<script src="<?php echo $paths['assets']; ?>js/stopwatch.js"></script>
<script src="<?php echo $paths['assets']; ?>js/uuid.js"></script>
<script src="<?php echo $paths['assets']; ?>js/weather.js"></script>
<?php } else { ?>
<script src="<?php echo $paths['assets']; ?>dist/ch31tools_1.1.min.js"></script>
<?php } ?>
</body>
</html>