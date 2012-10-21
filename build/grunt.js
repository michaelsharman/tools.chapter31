/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: {
			"name": "ch31tools",
			"title":"Chapter 31 Tools",
			"version": "0.7",
			"author": "Michael Sharman",
			"homepage": "http://michaelsharman.com",
			"main": "grunt"
		},

		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> */'
		},

		concat: {
			js: {
				src: [
					'../htdocs/js/_libs/jquery/jquery.min.js',
					'../htdocs/js/string.js',
					'../htdocs/js/character_count.js',
					'../htdocs/js/markdown.js',
					'../htdocs/js/tidy.js',
					'../htdocs/js/entitize.js',
					'../htdocs/js/factorial.js',
					'../htdocs/js/percent.js',
					'../htdocs/js/powerset.js',
					'../htdocs/js/strip_tags.js',
					//'../htdocs/js/browser.js',
					'../htdocs/js/uuid.js'
				],
				dest: '../htdocs/dist/<%= pkg.name %>.js'
			},
			css: {
				src: [
					'../htdocs/css/_libs/bootstrap/bootstrap.custom.css',
					'../htdocs/css/main.css'
				],
				dest: '../htdocs/dist/<%= pkg.name %>.css'
			}
		},

		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.js.dest>'],
				dest: '../htdocs/dist/<%= pkg.name %>_<%= pkg.version %>.min.js'
			}
		},

		cssmin: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.css.dest>'],
				dest: '../htdocs/dist/<%= pkg.name %>_<%= pkg.version %>.min.css'
			}
		},

		lint: {
			files: ['grunt.js', '../htdocs/js/*.js']
		},

		watch: {
			files: '<config:lint.files>',
			tasks: 'lint'
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				smarttabs: true
			},
			globals: {
				jQuery: true
			}
		},

		uglify: {}
	});

	// Load the grunt-css task to minify css
	grunt.loadNpmTasks('grunt-css');

	grunt.registerTask('default', 'concat min cssmin');
	grunt.registerTask('all', 'lint concat min cssmin');

};
