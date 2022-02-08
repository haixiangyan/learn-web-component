class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.initElement()
  }

  initElement() {
    this.attachShadow({ mode: 'open' })

    // 内容
    const wrapper = document.createElement('span')
    wrapper.textContent = this.getAttribute('data-text')

    this.shadowRoot.append(wrapper)
  }
}

customElements.define('hello-world', HelloWorld)
