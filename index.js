const { exec } = require('child_process')

const [,, ...args] = process.argv

if (args.length === 0) process.exit()

const commands = args.join(' ').replace(/,\s/, ',').split(',')

for (command of commands) {
  const child = exec(command, {
    cwd: process.cwd()
  })

  child.stdout.pipe(process.stdout, { end: false })

  process.stdin.resume()

  process.stdin.pipe(child.stdin, { end: false })

  child.stdin.on('end', () => {})

  child.on('exit', process.exit)
}