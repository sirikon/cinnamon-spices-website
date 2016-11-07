'use strict';

var gulp = require('gulp');

require('./gulp/tasks/style')(gulp);
require('./gulp/tasks/markup')(gulp);
require('./gulp/tasks/resources')(gulp);
require('./gulp/tasks/watch')(gulp);
require('./gulp/tasks/webserver')(gulp);

gulp.task('default', ['webserver', 'style:dev', 'markup', 'resources', 'watch']);
gulp.task('release', ['style:release', 'markup', 'resources']);