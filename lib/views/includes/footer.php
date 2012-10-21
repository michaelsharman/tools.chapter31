
</section>

<footer>
	<p>&copy; <?= date("Y"); ?></p>
</footer>

<?php if (APPMODE === 'development') { ?>
<script src="<?= $paths['assets']; ?>js/_libs/jquery/jquery.min.js"></script>
<!-- <script src="<?= $paths['assets']; ?>js/_libs/underscore/underscore-min.js"></script> -->
<script src="<?= $paths['assets']; ?>js/string.js"></script>
<script src="<?= $paths['assets']; ?>js/character_count.js"></script>
<script src="<?= $paths['assets']; ?>js/markdown.js"></script>
<script src="<?= $paths['assets']; ?>js/tidy.js"></script>
<script src="<?= $paths['assets']; ?>js/entitize.js"></script>
<script src="<?= $paths['assets']; ?>js/factorial.js"></script>
<script src="<?= $paths['assets']; ?>js/percent.js"></script>
<script src="<?= $paths['assets']; ?>js/powerset.js"></script>
<script src="<?= $paths['assets']; ?>js/strip_tags.js"></script>
<!-- <script src="<?= $paths['assets']; ?>js/browser.js"></script> -->
<script src="<?= $paths['assets']; ?>js/uuid.js"></script>
<?php } else { ?>
<script src="<?= $paths['assets']; ?>dist/ch31tools_0.7.min.js"></script>
<?php } ?>
</body>
</html>