const Component = (option) => {
    const {
        name,
        css,
        template,
        mounted
    } = option;
    window.customElements.define(name, class extends HTMLElement {
        // 构造器
        constructor(p) {
            super();
            const tpl = document.createElement('template');
            tpl.innerHTML = `
            <style>
                ${css}
            </style>
            ${template()}
            `
            console.log()
            const content = tpl.content;
            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild(content.cloneNode(true));
        }
        connectedCallback() {
            mounted()
        }
    })
}

module.exports = { Component }