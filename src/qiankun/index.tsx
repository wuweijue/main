import { registerMicroApps, start, initGlobalState } from "qiankun"; 

registerMicroApps([
    {
        name: 'react-dialogbox',
        // entry: '//localhost:5000',
        entry: '/react-dialogbox/index.html',
        container: '#react-dialogbox-container',
        activeRule: '/components/react-dialogbox'
    }
]);
  
const actions = initGlobalState({  
  // 初始的全局状态  
  theme: 'dark'  
});

start();

(window as any).globalActions = actions;

export default actions