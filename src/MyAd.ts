class MyAd extends HTMLElement {
  private wrapper: HTMLDivElement = null;

  constructor() {
    super();
    this.initElement()
  }

  // 注意 this 的指向
  onClose = () => {
    this.shadowRoot.removeChild(this.wrapper);
  }

  initElement() {
    this.attachShadow({ mode: 'open' })

    // 内容
    const wrapper = document.createElement('div')
    wrapper.className = 'ad'

    const image = document.createElement('img')
    image.className = 'ad-image'
    image.src = this.getAttribute('data-image')

    const closeIcon = document.createElement('span')
    closeIcon.className = 'ad-close-icon'
    closeIcon.textContent = '关闭'
    closeIcon.onclick = this.onClose

    const text = document.createElement('span')
    text.className = 'ad-text'
    text.textContent = '广告'

    wrapper.appendChild(image)
    wrapper.appendChild(closeIcon)
    wrapper.appendChild(text)
    this.wrapper = wrapper;

    // 样式
    const style = document.createElement('style')
    style.textContent = `
      .ad {
        position: relative;
        display: inline-flex;
        height: 300px;
        width: 300px;
        border: 2px solid red;
      }
    
      .ad-image {
        height: 100%;
        width: 100%;
      }
      
      .ad-close-icon {
        padding: 2px 4px;
        position: absolute;
        top: 12px;
        right: 12px;
        cursor: pointer;
        border: 1px solid black;
        border-radius: 4px;
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

customElements.define('my-ad', MyAd)
