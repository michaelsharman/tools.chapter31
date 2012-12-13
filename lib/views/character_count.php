<article>
	<h1>Letter / Word Count</h1>
	<p>Paste content in the text box below to determine the number of letters and words contained within.</p>
	<p>Optionally enter a number in the small text box underneath to highlight the first `n` characters. This
	can be useful if you want to see what the first 100 characters are.</p>
	<p>By default, the calculation of letters/words ignores any embedded HTML that may be contained within the
	text. If you <em>do</em> want to include HTML markup in your letter/word count, untick the checkbox below.</p>

	<form id="frmLetterCount">
		<fieldset>
			<div class="row-fluid">
				<label class="control-label" for="content">
					<textarea class="input-block-level" name="content" id="content" rows="15" autofocus tabindex="1"></textarea>
				</label>
			</div>
			<div class="row-fluid">
				<div class="span8">
					<label for="count">
						<input type="text" name="count" id="count" class="input-small" placeholder="0" title="Highlight the text at the following position" tabindex="2">
						Highlight the first `n` characters
					</label>
					<label for="ignorehtml">
						<input type="checkbox" name="ignorehtml" id="ignorehtml" checked tabindex="3">
						Ignore any embedded HTML whilst calculating word/letter count
					</label>
				</div>
				<div class="span4">
					<button type="submit" id="btnLetterCount" class="btn btn-success btn-large pull-right" tabindex="4">Count &raquo;</button>
				</div>
			</div>
		</fieldset>
	</form>
	<div class="results">
		<div id="lenLC" class="text-xlarge well counter"></div>
		<div id="lenWC" class="text-xlarge well counter"></div>
		<div class="hide text-processed"></div>
	</div>
</article>