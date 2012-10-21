<article>
	<h1>Generate UUID</h1>
	<p>Generate UUIDs that are either <a href="http://en.wikipedia.org/wiki/Universally_unique_identifier#Version_3_.28MD5_hash.29" target="_blank">v3 (MD5 hash)</a>,
		<a href="http://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29" target="_blank">v4 (random)</a> or
		<a href="http://en.wikipedia.org/wiki/Universally_unique_identifier#Version_5_.28SHA-1_hash.29" target="_blank">v5 (SHA-1 hash)</a>.</p>
	<p>Returns 36 characters, in the format 8-4-4-4-12.</p>
	<p>Optionally return 35 characters in the ColdFusion UUID format (8-4-4-16)?</p>

	<form id="frmUUID" method="get" action="/uuid">
		<fieldset>
		<div class="row">
			<div class="span4">
				<label for="op-v3">
					<input type="radio" id="op-v3" name="version" value="3"> Version 3 (MD5 hash)
				</label>
				<label for="op-v4">
					<input type="radio" id="op-v4" name="version" value="4"> Version 4 (random)
				</label>
				<label for="op-v5">
					<input type="radio" id="op-v5" name="version" value="5" checked> Version 5 (SHA-1 hash)
				</label>
			</div>
			<div class="span4">
				<label for="textUpper">
					<input type="checkbox" id="textUpper" name="textUpper" value="1" checked> Return as upper case?
				</label>
				<label for="format">
					<input type="checkbox" id="format" name="format" value="coldfusion"> ColdFusion format (8-4-4-16)?
				</label>
			</div>
			<button type="submit" class="btn btn-success btn-large pull-right">Generate &raquo;</button>
		</div>
		</fieldset>
	</form>
	<div class="results">
		<div class="text-processed text-xxlarge"></div>
	</div>
</article>