// TODO: move to bridgit project

declare module "bridgit" {
  export interface HawkOptions {
    port?: number
    origin?: string
    prefix?: string
    algorithm?: string
    encryptPayload?: boolean
    id: string
    key: string
  }
}
