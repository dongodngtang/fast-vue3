declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}

declare module 'virtual:*' {
  const result: any
  export default result
}

declare interface Window {
  __POWERED_BY_QIANKUN__?:string;
}