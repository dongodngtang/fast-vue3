import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'
import './index.css'
import ArcoVue from "@arco-design/web-vue"
import { App as VueApp } from '@vue/runtime-core';
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
// 支持SVG
import 'virtual:svg-icons-register'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
let instance: VueApp | null = null
function render(){
    instance = createApp(App).use(router).use(ArcoVue).use(ArcoVueIcon).use(piniaStore)
    instance.mount('#app')
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
}
renderWithQiankun({
    mount(props:any) {
      console.log('mount',props);
      render();
    },
    bootstrap() {
      console.log('bootstrap');
    },
    unmount(props: any) {
        instance?.unmount()
        instance = null
    },
  });
