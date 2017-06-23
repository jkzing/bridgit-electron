import { spawn } from 'child_process'
import path from 'path'

export default function bridgit() {
  let proc = spawn('node_modules/.bin/bridgit', ['hawk'])
  // Handle normal output
  proc.stdout.on('data', data => {
    // As said before, convert the Uint8Array to a readable string.
    var str = String.fromCharCode.apply(null, data)
    console.info(str)
  })

  // Handle error output
  proc.stderr.on('data', data => {
    // As said before, convert the Uint8Array to a readable string.
    var str = String.fromCharCode.apply(null, data)
    console.error(str)
  })

  process.env.BRIDGIT_PID = proc.pid
}
