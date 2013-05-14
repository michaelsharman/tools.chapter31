/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';'
			},
			js: {
				src: [
					'../htdocs/static/js/_libs/jquery/jquery.min.js',
					'../htdocs/static/js/_main.js',
					'../htdocs/static/js/base64.js',
					'../htdocs/static/js/string.js',
					'../htdocs/static/js/character_count.js',
					'../htdocs/static/js/entitize.js',
					'../htdocs/static/js/factorial.js',
					'../htdocs/static/js/keycode.js',
					'../htdocs/static/js/markdown.js',
					'../htdocs/static/js/percent.js',
					'../htdocs/static/js/powerset.js',
					'../htdocs/static/js/stopwatch.js',
					'../htdocs/static/js/strip_tags.js',
					'../htdocs/static/js/tidy.js',
					'../htdocs/static/js/uuid.js',
					'../htdocs/static/js/weather.js'
				],
				dest: '../htdocs/static/dist/<%= pkg.name %>.js'
			},
			css: {
				src: [
					'../htdocs/static/vendor/bootstrap/css/bootstrap.css',
					'../htdocs/static/vendor/bootstrap/css/bootstrap-responsive.css',
					'../htdocs/static/css/main.css'
				],
				dest: '../htdocs/static/dist/<%= pkg.name %>.css'
			}
		},

		cssmin: {
			dist: {
				src: ['../htdocs/static/dist/<%= pkg.name %>.css'],
				dest: '../htdocs/static/dist/<%= pkg.name %>-<%= pkg.version %>.min.css'
			}
		},

		jshint: {
			files: ['../htdocs/static/js/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},

		qunit: {
			all: ['../htdocs/tests/qunit/index.html']
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: '../htdocs/static/dist/<%= pkg.name %>.js',
				dest: '../htdocs/static/dist/<%= pkg.name %>-<%= pkg.version %>.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('min', ['concat', 'uglify', 'cssmin']);
};
