<article>
	<h1>Markdown</h1>
	<p>Paste text that has been marked up using <a href="http://daringfireball.net/projects/markdown/" target="_blank"><em>markdown</em></a>
	syntax in the text box below and click <em>Process</em> to see the content rendered as HTML.</p>
	<p>Optionally, leave the "Use markdown extra" checkbox ticked to process entered text with
	<a href="http://michelf.com/projects/php-markdown/extra/" target="_blank">PHP markdown extra</a> extended sytax.</p>
	<div id="md-cheatsheet" class="hide">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th>Style</th>
					<th>Sample</th>
					<th>Result</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>heading 1</td>
					<td>
						# This is a heading<br>
						# This is a heading #<br>
						This is a heading<br>
						============
					</td>
					<td><h1>This is a heading</h1></td>
				</tr>
				<tr>
					<td>heading 2</td>
					<td>
						## This is a heading<br>
						## This is a heading ##<br>
						This is a heading<br>
						-------------------
					</td>
					<td><h1>This is a heading</h1></td>
				</tr>
				<tr>
					<td>bold</td>
					<td>
						**this is bold**<br>
						__this is bold__
					</td>
					<td><strong>this is bold</strong></td>
				</tr>
				<tr>
					<td>italic</td>
					<td>
						*this is italic*<br>
						_this is italic_
					</td>
					<td><em>this is italic</em></td>
				</tr>
				<tr>
					<td>unordered list</td>
					<td>
						* item 1<br>
						* item 2<br>
						* item3
						<p>Instead of (*), you could use (+) or (-)</p>
					</td>
					<td>
						<ul>
							<li>item 1</li>
							<li>item 2</li>
							<li>item 3</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td>ordered list</td>
					<td>
						1 item 1<br>
						2 item 2<br>
						3 item3
					</td>
					<td>
						<ol>
							<li>item 1</li>
							<li>item 2</li>
							<li>item 3</li>
						</ol>
					</td>
				</tr>
				<tr>
					<td>code</td>
					<td>
						`&lt;script&gt;alert('hi there');&lt;/script&gt;`
						<p>To delimit entire blocks of code, start each line with 4 spaces or a tab</p>
					</td>
					<td><code>&lt;script&gt;alert('hi there');&lt;/script&gt;</code></td>
				</tr>
				<tr>
					<td>blockquote</td>
					<td>
					&gt; This is line one<br>
					&gt;<br>
					&gt; This is another
					</td>
					<td>
						<blockquote>
							<p>This is line one</p>
							<p>This is another</p>
						</blockquote>
					</td>
				</tr>
				<tr>
					<th colspan="3">PHP Markdown Extra (more docs from <a href="http://michelf.com/projects/php-markdown/extra/" target="_blank">their site</a>)</th>
				</tr>
				<tr>
					<td>tables</td>
					<td>
<pre class="plain"><code>First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell</code></pre>
					</td>
					<td>
					<table>
						<thead>
						<tr>
						  <th>First Header</th>
						  <th>Second Header</th>
						</tr>
						</thead>
						<tbody>
						<tr>
						  <td>Content Cell</td>
						  <td>Content Cell</td>
						</tr>
						<tr>
						  <td>Content Cell</td>
						  <td>Content Cell</td>
						</tr>
						</tbody>
					</table>
					</td>
				</tr>
				<tr>
					<td>definition lists</td>
					<td>
<pre class="plain"><code>Apple
:   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.</code></pre>
					</td>
					<td>
						<dl>
							<dt>Apple</dt>
							<dd>Pomaceous fruit of plants of the genus Malus in
							the family Rosaceae.</dd>

							<dt>Orange</dt>
							<dd>The fruit of an evergreen tree of the genus Citrus.</dd>
						</dl>
					</td>
				</tr>
			</tbody>
		</table>
		<p>For more information, <a href="http://daringfireball.net/projects/markdown/basics" target="_blank">view the official docs for Markdown</a></p>
	</div>
	<p><a class="btn btn-small btn-info" href="#" id="btn-cheatsheet"><i class="icon-info-sign icon-white"></i> Markdown cheatsheet <i id="chev" class="icon-chevron-down icon-white"></i></a></p>

	<form id="frmMarkdown" method="POST">
		<fieldset>
			<div class="row-fluid control-group">
				<div class="span12">
					<label class="control-label" for="md-content">
						<textarea class="input-block-level" name="md-content" id="md-content" rows="15" autofocus></textarea>
					</label>
				</div>
			</div>
			<div class="row-fluid">
				<div class="span12">
					<label for="md-extra">
						<input type="checkbox" name="md-extra" id="md-extra" value="1" checked>
						Use markdown extended
						<button type="submit" class="btn btn-success btn-large pull-right">Process &raquo;</button>
					</label>
				</div>
			</div>
		</fieldset>
	</form>
	<div class="results">
		<div class="text-processed"></div>
	</div>
</article>