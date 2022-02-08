class MyLayout extends HTMLElement {
  constructor() {
    super();
    this.initElements()
  }

  initElements() {
    const template = (document.getElementById('my-layout-template') as HTMLTemplateElement).content;
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(template.cloneNode(true));
  }
}

customElements.define('my-layout', MyLayout)
