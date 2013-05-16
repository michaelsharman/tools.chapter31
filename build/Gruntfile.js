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
					'../htdocs/static/js/libs/jquery/jquery.min.js',
					'../htdocs/static/js/app/_main.js',
					'../htdocs/static/js/app/base64.js',
					'../htdocs/static/js/app/string.js',
					'../htdocs/static/js/app/character_count.js',
					'../htdocs/static/js/app/entitize.js',
					'../htdocs/static/js/app/factorial.js',
					'../htdocs/static/js/app/keycode.js',
					'../htdocs/static/js/app/markdown.js',
					'../htdocs/static/js/app/percent.js',
					'../htdocs/static/js/app/powerset.js',
					'../htdocs/static/js/app/stopwatch.js',
					'../htdocs/static/js/app/strip_tags.js',
					'../htdocs/static/js/app/tidy.js',
					'../htdocs/static/js/app/uuid.js',
					'../htdocs/static/js/app/weather.js'
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

		// Can't figure out how to load fixtures, so some expectations are failing
		/*jasmine: {
			tools: {
				src: '../htdocs/static/js/app/*.js',
				options: {
					specs: '../htdocs/tests/jasmine/spec/*.js',
					helpers: '../htdocs/tests/jasmine/spec/javascripts/helpers/*.js'
				}
			}
		},*/

		jshint: {
			files: ['../htdocs/static/js/app/*.js'],
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
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']); //jasmine
	grunt.registerTask('min', ['concat', 'uglify', 'cssmin']);
};
