import Events from 'events'
import * as child from 'child_process'
import path from 'path'

import { ipcMain, ipcRenderer } from 'electron'

import Bridgit from './Bridgit'

export default class BridgitManager extends Events.EventEmitter {
  private static instances: Array<Bridgit> = []

  public static start(): void {
    ipcMain.on('bridgit:create', this.createInstance.bind(this))
    ipcMain.on('bridgit:stop-all', this.clearInstances.bind(this))
  }

  public static createBridgit(): void {
    ipcRenderer.send('bridgit:create')
  }

  public static stopAll(): void {
    this.instances.forEach((ins: Bridgit) => {
      ins.exit()
    })
  }

  private static createInstance(): Bridgit {
    let bgt: Bridgit = new Bridgit()
    this.instances.push(bgt)
    return bgt
  }

  private static clearInstances(): void {
  }
}
