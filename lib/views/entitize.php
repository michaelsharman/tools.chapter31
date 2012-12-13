<article>
	<h1>Entitize</h1>
	<p>Paste content in below to convert all special characters to HTML entities (&lt;, &gt;, &amp; will become &amp;lt; &amp;gt; &amp;amp; etc)</p>

	<form id="frmEntitize" method="POST" action="/api/entitize">
		<fieldset>
			<label class="control-label" for="entitize-content">
				<textarea class="input-block-level" name="content" id="entitize-content" rows="20" autofocus></textarea>
			</label>
			<p><a class="btn btn-small btn-info pull-left" href="#" id="btn-options"><i class="icon-info-sign icon-white"></i> Options <i id="chev" class="icon-chevron-down icon-white"></i></a></p>
			<button type="submit" class="btn btn-success btn-large pull-right">Entitize &raquo;</button>
		</fieldset>
		<div id="tidy-options" class="hide">
			<div class="span6">
				<label for="op-quotestyle">
					<select id="op-quotestyle" name="op-quotestyle">
						<option value="ENT_COMPAT">Encode double quotes</option>
						<option value="ENT_QUOTE_SINGLE">Encode single quotes</option>
						<option value="ENT_QUOTES">Encode double and single quotes</option>
						<option value="ENT_NOQUOTES" selected>Do not encode any quotes</option>
					</select>
				</label>
			</div>
			<div class="span6">
				<label for="op-replacetype-special">
					<input type="radio" id="op-replacetype-special" name="op-replacetype" value="special" checked> Special characters only (&amp;, &lt;, &gt;, &quot; and &apos;)
				</label>
				<label for="op-replacetype-all">
					<input type="radio" id="op-replacetype-all" name="op-replacetype" value="all"> All characters that have equivalent HTML entities
				</label>
			</div>
		</div>
	</form>
</article>