// Gulp
var gulp = require('gulp');

// Plugins
const browserSync = require('browser-sync');

// Browser Sync / Server
gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: './',
			index: 'index.html'
		},
		notify: false,
		ghostMode: false
	})
});

// Browser Sync Reload
gulp.task('browser-sync-reload', () => browserSync.reload());

// Default Grunt Task
gulp.task('default', ['browser-sync'], () => {

	// Watch for all changes in parent directory - then reload
	gulp.watch(['./index.html', './app.js'], ['browser-sync-reload'])

});