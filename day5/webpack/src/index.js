const {
    Component
} = require('./eno.js');
require('./index.css')
// 子组件
require('./components/eno-header/eno-header')
require('./components/eno-search/eno-search')
require('./components/eno-panel/eno-panel')
Component({
    name: "eno-app",
    css: `
    `,
    template() {
        return `
            <div>
                <eno-header></eno-header>
                <eno-search></eno-search>
                <eno-panel></eno-panel>
            </div>
        `
    },
    mounted() {
        console.log('挂载后123132')
    }
})