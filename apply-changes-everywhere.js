'use strict';

const spawn = require('child_process').spawn;

const elementNames = [
  // TODO: Add more elements here
  'vaadin-date-picker'
];

function run(commandLine, options = {}) {
  options.stdio = options.stdio || 'inherit';
  let cmd, args;
  [cmd, ...args] = commandLine.split(' ');
  return new Promise((resolve, reject) => {
    spawn(cmd, args, options)
      .on('close', (code) => {
        if (code === 0) {
          resolve(code);
        } else {
          reject(code);
        }
      });
  });
}

class ElementRepo {
  constructor(name) {
    this.name = name;
    this.originUrl = `git@github.com:vaadin/${name}.git`;
    this.path = `repos/${name}`;
  }

  clone() {
    return run(`git clone --depth 1 ${this.originUrl} ${this.path}`);
  }

  runInWorktree(commandLine, options = {}) {
    options.cwd = this.path;
    return run(commandLine, options);
  }

  applyPatches() {
    return this.runInWorktree('git am ../../patches/*.patch', {shell: true});
  }
}

function clearPatches() {
  return run('rm -rf patches/*.patch', {shell: true});
}

function generatePatches(since) {
  return run(`git format-patch -o patches ${since}`);
}

function clearRepos() {
  return run('rm -rf repos/*', {shell: true});
}

function processElements() {
  return Promise.all(elementNames.map((name) => {
    const repo = new ElementRepo(name);
    return repo.clone()
      .then(() => repo.applyPatches());
  }));
}

function main(scriptArgs) {
  clearPatches()
    .then(() => generatePatches(scriptArgs))
    .then(clearRepos)
    .then(processElements)
    .catch((e) => console.error(e));
}

function printUsage() {
  console.info(`
Usage: node ./apply-changes-everywhere.js (<since> | <revision range>)
`);
}

var scriptArgs = process.argv.slice(2);
if (scriptArgs.length) {
  main(scriptArgs);
} else{
  printUsage();
}
