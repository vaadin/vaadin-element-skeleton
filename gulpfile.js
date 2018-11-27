'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const find = require('gulp-find');
const replace = require('gulp-replace');
const expect = require('gulp-expect-file');
const grepContents = require('gulp-grep-contents');
const clip = require('gulp-clip-empty-files');
const git = require('gulp-git');
const semver = require('semver');
const fs = require('fs');
const path = require('path');

gulp.task('lint', ['lint:js']);

gulp.task('lint:js', function() {
  return gulp.src([
    '*.js',
    'src/**/*.js',
    'demo/**/*.js',
    'theme/**/*.js',
    'test/**/*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError('fail'));
});

gulp.task('version:check', function() {
  const expectedVersion = new RegExp('^' + require('./package.json').version + '$');
  return gulp.src(['src/*.js'])
    .pipe(find(/static get version.*\n.*/))
    .pipe(clip()) // Remove non-matching files
    .pipe(replace(/.*\n.*return '(.*)'.*/, '$1'))
    .pipe(grepContents(expectedVersion, {invert: true}))
    .pipe(expect({reportUnexpected: true}, []));
});

gulp.task('version:update', ['version:check'], function() {
  // Should be run from 'preversion'
  // Assumes that the old version is in package.json and the new version in the `npm_package_version` environment variable
  const oldVersion = require('./package.json').version;
  const newVersion = process.env.npm_package_version;
  if (!oldVersion) {
    throw new 'No old version found in package.json';
  }
  if (!newVersion) {
    throw new 'New version must be given as a npm_package_version environment variable.';
  }
  return gulp.src(['src/*.js'])
    .pipe(replace(oldVersion, newVersion))
    .pipe(gulp.dest('src'))
    .pipe(git.add());
});
