var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-Sync'),
	stream = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	del = require('del'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify') ;