class PrideFlagComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['text', 'height', 'overlay-width'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  get text() {
    return this.getAttribute('text') || 'laut, queer, radikal';
  }

  get height() {
    return this.getAttribute('height') || '2rem';
  }

  get overlayWidth() {
    return this.getAttribute('overlay-width') || '4rem';
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .pride-flag {
          position: relative;
          display: flex;
          height: ${this.height};
          width: 100%;
          flex-direction: column;
        }

        .pride-flag__stripe {
          flex: 1;
        }

        .pride-flag__stripe--red {
          background-color: oklch(63.7% 0.237 25.331);
        }

        .pride-flag__stripe--orange {
          background-color: oklch(70.5% 0.213 47.604);
        }

        .pride-flag__stripe--yellow {
          background-color: oklch(85.2% 0.199 91.936);
        }

        .pride-flag__stripe--green {
          background-color: oklch(72.3% 0.219 149.579);
        }

        .pride-flag__stripe--blue {
          background-color: oklch(62.3% 0.214 259.815);
        }

        .pride-flag__stripe--purple {
          background-color: oklch(62.7% 0.265 303.9);
        }

        .pride-flag__overlay {
          position: absolute;
          top: 0;
          height: ${this.height};
          width: ${this.overlayWidth};
          object-fit: contain;
          object-position: left;
        }

        .pride-flag__overlay--left {
          left: 0;
        }

        .pride-flag__overlay--right {
          right: 0;
          transform: rotate(180deg);
        }

        .pride-flag__text-container {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pride-flag__text {
          font-size: 0.875rem;
          font-family: sans-serif;
          line-height: 1.25;
          font-weight: 700;
          color: #fff;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, 
                       -1px 1px 0 #000, 1px 1px 0 #000;
        }
      </style>

      <div class="pride-flag">
        <div class="pride-flag__stripe pride-flag__stripe--red"></div>
        <div class="pride-flag__stripe pride-flag__stripe--orange"></div>
        <div class="pride-flag__stripe pride-flag__stripe--yellow"></div>
        <div class="pride-flag__stripe pride-flag__stripe--green"></div>
        <div class="pride-flag__stripe pride-flag__stripe--blue"></div>
        <div class="pride-flag__stripe pride-flag__stripe--purple"></div>

        <img 
          src="intersex-arrow.svg" 
          alt="Progress Pride Flag" 
          class="pride-flag__overlay pride-flag__overlay--left" 
        />
        <img 
          src="intersex-arrow.svg" 
          alt="Progress Pride Flag" 
          class="pride-flag__overlay pride-flag__overlay--right" 
        />

        <div class="pride-flag__text-container">
          <span class="pride-flag__text">${this.text}</span>
        </div>
      </div>
    `;
  }
}

customElements.define('pride-flag', PrideFlagComponent);
