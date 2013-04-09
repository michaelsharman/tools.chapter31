<article>
	<h1>(X)HTML Tidy</h1>
	<p>Paste source code here (eg XML, HTML, XHTML) to cleanup and format using <a href="http://tidy.sourceforge.net/" target="_blank">tidy</a>.
	Currently HTML5 syntax is not supported.</p>

	<form id="frmTidy" method="POST" action="/api/tidy">
		<fieldset>
			<label class="control-label" for="tidy-content">
				<textarea class="input-block-level" name="tidy-content" id="tidy-content" rows="20" autofocus></textarea>
			</label>
			<label class="control-label" for="content">
				<label for="md-extra">
					<p><a class="btn btn-small btn-info pull-left" href="#" id="btn-options"><i class="icon-info-sign icon-white"></i> Options <i id="chev" class="icon-chevron-down icon-white"></i></a></p>
					<button type="submit" class="btn btn-success btn-large pull-right">Process &raquo;</button>
				</label>
			</label>
		</fieldset>
		<div id="page-options" class="hide row-fluid">
			<div class="span4">
				<label for="op-indent">
					<input type="checkbox" id="op-indent" name="op-indent" value="1" checked> Indent block-level tags
				</label>
				<label for="op-hide-comments">
					<input type="checkbox" id="op-hide-comments" name="op-hide-comments" value="1" checked> Strip all comments
				</label>
				<label for="op-show-body-only">
					<input type="checkbox" id="op-show-body-only" name="op-show-body-only" value="1" checked> &lt;body&gt; content only (no headers)
				</label>
				<label for="op-enclose-block-text">
					<input type="checkbox" id="op-enclose-block-text" name="op-enclose-block-text" value="1" checked> Add &lt;p&gt; tags around text where possible
				</label>
			</div>
			<div class="span4">
				<label for="op-indent-spaces">
					<input type="text" id="op-indent-spaces" name="op-indent-spaces" value="4" class="input-small"> Indent Spaces
				</label>
				<label for="op-wrap">
					<input type="text" id="op-wrap" name="op-wrap" value="72" class="input-small"> Wrap lines
				</label>
			</div>
			<div class="span4">
				<label for="op-type">
					<select name="op-type" class="input-small">
						<option value="HTML">HTML (4)</option>
						<option value="XHTML">XHTML</option>
						<option value="XML">XML</option>
					</select> Tidy Type
				</label>
			</div>
		</div>
	</form>
	<div class="results">
		<div><pre><code class="text-processed"></code></pre></div>
	</div>
</article>
