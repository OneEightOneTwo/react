const {
    Component
} = require('../../eno.js');
// console.log(require('./eno-header.css').toString())
// console.log(require('./eno-header.html'))
export default Component({
    name: "eno-header",
    css: `
        header{
            color:white;
            background-color: red;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
    `,
    template() {
        const data = {
            name: "Hello World"
        }
        return `
            <header>${data.name}</header>
        `
    },
    mounted() {
        console.log('挂载后123132')
    }
})