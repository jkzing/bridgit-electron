import * as child from 'child_process'
import path from 'path'

export default class BridgitMgr {
  static runningProcess: Array<number> = []

  public static start(): number {
    let procs: child.ChildProcess
    procs = child.spawn('node_modules/.bin/bridgit', ['hawk'])
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

    this.runningProcess.push(procs.pid)
    process.env.BRIDGIT_PID = this.runningProcess.join(',')

    return procs.pid
  }

  public static stopAll(): void {
    console.log(this.runningProcess)
    this.runningProcess.forEach((p: number) => {
      process.kill(p)
    })
  }
}
