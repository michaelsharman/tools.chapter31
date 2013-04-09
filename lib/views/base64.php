<article>
	<h1>Base64 Encode/Decode</h1>
	<p>Paste content in the box below to encode or decode content to/from <a href="http://en.wikipedia.org/wiki/Base64" target="_blank">base64</a>.</p>

	<form id="frmBase64" method="POST" action="/api/base64">
		<fieldset>
			<label class="control-label" for="base64-content">
				<textarea class="input-block-level" name="content" id="base64-content" rows="10" autofocus></textarea>
			</label>
			<div class="pull-left">
				<label for="op-action-encode" class="pull-left">
					<input type="radio" id="op-action-encode" name="op-action" value="encode" checked> Encode
				</label>
				<label for="op-action-decode" class="pull-left pad-left-sml">
					<input type="radio" id="op-action-decode" name="op-action" value="decode"> Decode
				</label>
			</div>
			<button type="submit" class="btn btn-success btn-large pull-right">Convert &raquo;</button>
		</fieldset>
	</form>
	<div class="results">
		<div><pre><code class="text-processed"></code></pre></div>
	</div>
</article>
