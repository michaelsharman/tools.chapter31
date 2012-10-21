<article>
	<h1>Powerset</h1>
	<p>A <em>set</em> is a collection of certain values, without any particular order, and no repeated values.
		A <em>powerset</em> is the set of all subsets, or all permutations (possible combinations) of the original set.<p>
	<p>Eg if an original set is: <code>{1,2,3,4}</code> then the powerset would be (including a blank option):</p>
	<p><code>{{}, {1}, {2}, {1,2}, {3}, {1,3}, {2,3}, {1,2,3}, {4}, {1,4}, {2,4}, {1,2,4}, {3,4}, {1,3,4}, {2,3,4}, {1,2,3,4}}</code></p>
	<p>Enter a comma delimited list below (with no braces or brackets) to generate the powerset.</p>
	<form id="frmPowerset">
		<fieldset>
			<div class="row">
				<div class="span12">
					<label for="number">
						<input type="text" id="set" class="span12" autofocus>
					</label>
				</div>
			</div>
			<div class="row">
				<div class="span12">
					<p><a class="btn btn-small btn-info pull-left" href="#" id="btn-options"><i class="icon-info-sign icon-white"></i> Options <i id="chev" class="icon-chevron-down icon-white"></i></a></p>
					<button type="submit" class="pull-right btn btn-success">Process &raquo;</button>
				</div>
			</div>
		</fieldset>
		<div id="options" class="hide row">
			<div class="span4 format-list">
				<fieldset>
					<legend>Return List</legend>
					<label for="op-format-list">
						<input type="radio" name="op-format" id="op-format-list" value="list" checked>
						Return as a list?
					</label>
					<div class="pad-left-sml">
						<label for="op-new-line-after">
							<input type="checkbox" id="op-new-line-after" name="op-new-line-after" value="1"> Force a new line after each result element?
						</label>
						<label for="op-trim">
							<input type="checkbox" id="op-trim" name="op-trim" value="1"> Trim individual elements?
						</label>
						<p>Enclose subsets by:</p>
						<label for="op-enclosed-braces">
							<input type="radio" name="op-enclosed" id="op-enclosed-braces" value="braces" checked> Braces {}
						</label>
						<label for="op-enclosed-brackets">
							<input type="radio" name="op-enclosed" id="op-enclosed-brackets" value="brackets"> Brackets []
						</label>
						<label for="op-enclosed-quotes">
							<input type="radio" name="op-enclosed" id="op-enclosed-quotes" value="quotes"> Quotes ""
						</label>
						<label for="op-enclosed-nothing">
							<input type="radio" name="op-enclosed" id="op-enclosed-nothing" value="nothing"> Nothing
						</label>
					</div>
				</fieldset>
			</div>
			<div class="span4 format-json">
				<fieldset>
					<legend>Return JSON</legend>
					<label for="op-format-json">
						<input type="radio" name="op-format" id="op-format-json" value="JSON">
						Return as a JSON?
					</label>
				</fieldset>
			</div>
		</div>
	</form>
	<div class="results">
		<output id="text-processed" class="text-large"></output>
	</div>
</article>