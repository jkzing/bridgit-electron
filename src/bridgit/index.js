import { spawn } from 'child_process'
import path from 'path'

let procs;

export default function bridgit() {
  procs = spawn('node_modules/.bin/bridgit', ['hawk'])
  // Handle normal output
  procs.stdout.on('data', data => {
    // As said before, convert the Uint8Array to a readable string.
    var str = String.fromCharCode.apply(null, data)
    console.info(str)
  })

  // Handle error output
  procs.stderr.on('data', data => {
    // As said before, convert the Uint8Array to a readable string.
    var str = String.fromCharCode.apply(null, data)
    console.error(str)
  })

  process.env.BRIDGIT_PID = procs.pid
}

export function shutdown() {
  procs.kill('SIGNUP')
  process.env.BRIDGIT_PID = null
}
