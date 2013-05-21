// Karma configuration


// base path, that will be used to resolve files and exclude
basePath = 'htdocs/static/js/app';


// list of files / patterns to load in the browser
files = [
	JASMINE,
	JASMINE_ADAPTER,
	'../libs/**/*.js',
	'*.js',
	'../../../tests/jasmine/spec/javascripts/helpers/*.js',
	{
		pattern: '../../../tests/jasmine/spec/javascripts/fixtures/*.html',
		watched: true,
		included: false,
		served: true
	},
	'../../../tests/jasmine/spec/*.js'
];


// list of files to exclude (from loaded files)
exclude = [
	'../../../tests/jasmine/spec/javascripts/helpers/jquery.min.js'
];


// which files are tested for coverage
preprocessors = {
	'*.js': 'coverage'
};


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
// dots ===console output
// junit === reporting back into sonar
reporters = ['coverage', 'dots', 'progress', 'junit'];


// Note: 'lcov' if fubar...bad path somewhere in karma/istanbul
var coverageReporterType;
//coverageReporterType = 'html'; // Use for local development
coverageReporterType = 'lcovonly'; // Use for CI
coverageReporter = {
	type : coverageReporterType,
	dir : '../../../../coverage/'
};


junitReporter = {
	suite: 'js',
	outputFile : '../../../../coverage/junit/test-results.xml'
};


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
//browsers = ['Chrome', 'Firefox', 'Safari'];
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
