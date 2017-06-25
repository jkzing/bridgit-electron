import Events from 'events'
import {spawn, ChildProcess} from 'child_process'

export default class Bridgit extends Events.EventEmitter {
  private procs: ChildProcess

  constructor() {
    super()
    this.procs = spawn('node_modules/.bin/bridgit', ['hawk'])
    // Handle normal output
    this.procs.stdout.on('data', data => {
      // As said before, convert the Uint8Array to a readable string.
      var str = String.fromCharCode.apply(null, data)
      console.info(str)
    })

    // Handle error output
    this.procs.stderr.on('data', data => {
      // As said before, convert the Uint8Array to a readable string.
      var str = String.fromCharCode.apply(null, data)
      console.error(str)
    })
  }

  exit() {
    if (this.procs) {
      this.procs.kill('SIGHUP')
    }
  }
}