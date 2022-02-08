class Advertisement extends HTMLElement {
  constructor() {
    super();
    this.initElement()
  }

  initElement() {
    this.attachShadow({ mode: 'open' })

    // 内容
    const wrapper = document.createElement('div')
    wrapper.className = 'ad'

    const image = document.createElement('img')
    image.className = 'ad-image'
    image.src = this.getAttribute('data-image')

    const text = document.createElement('span')
    text.className = 'ad-text'
    text.textContent = '广告'

    wrapper.appendChild(image)
    wrapper.appendChild(text)

    // 样式
    const style = document.createElement('style')
    style.textContent = `
      .ad {
        position: relative;
        display: inline-flex;
        height: 300;
        width: 300;
        border: 2px solid red;
      }
    
      .ad-image {
        height: 100%;
        width: 100%;
      }
      
      .ad-text {
        position: absolute;
        right: 12px;
        bottom: 12px;
      }
    `

    this.shadowRoot.append(style, wrapper);
  }
}

customElements.define('my-ad', Advertisement)
