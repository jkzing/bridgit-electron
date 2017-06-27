import Events from 'events'
import {spawn, ChildProcess} from 'child_process'

export default class Bridgit extends Events.EventEmitter {
  private procs: ChildProcess

  constructor() {
    super()
    this.procs = spawn('node_modules/.bin/bridgit', ['hawk'])

    this.procs.stdout.on('data', data => {
      // convert the Uint8Array to a readable string.
      let message: string = String.fromCharCode.apply(null, data)

      this.emit('log', message)
    })

    this.procs.stderr.on('data', data => {
      // onvert the Uint8Array to a readable string.
      let error: string = String.fromCharCode.apply(null, data)

      this.emit('error', error)
    })
  }

  exit() {
    if (this.procs) {
      this.procs.kill('SIGHUP')
    }
  }
}