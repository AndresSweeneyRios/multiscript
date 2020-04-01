#!/usr/bin/env node

const { exec } = require('child_process')

const [,, ...args] = process.argv

if (args.length === 0) process.exit()

const commands = args.join(' ').split(/\s?\+\s?/).filter(Boolean)

console.log(args.join(' '), commands)

process.stdin.resume()

let started = 0

for (command of commands) {
  started++

  const child = exec(command, {
    cwd: process.cwd()
  })

  child.stdout.pipe(process.stdout, { end: false })

  process.stdin.pipe(child.stdin, { end: false })

  child.stdin.on('end', () => {})

  child.on('exit', code => {
    if (!--started) process.exit(code)
  })
}