class CookieNotice extends HTMLElement {
  static get observedAttributes() {
    return ["id"];
  }

  constructor() {
    super();

    this.attrs = this.getAttributesFromElement();
    this.elements = this.getElements();
    this.bindEvents();
    this.checkVisibility();
  }

  getAttributesFromElement() {
    return {
      id: this.getAttribute('id')
    };
  }

  getElements() {
    return {
      acceptLinks: this.querySelectorAll('[data-accept]')
    };
  }

  bindEvents() {
    this.elements.acceptLinks.forEach(link => {
      link.addEventListener('click', this.handleAcceptLink.bind(this));
    });
  }

  handleAcceptLink(e) {
    e.preventDefault();
    window.localStorage.setItem('ce-cookie-notice___' + this.id, true);
    this.checkVisibility();
  }

  checkVisibility() {
    const idValue = window.localStorage.getItem('ce-cookie-notice___' + this.id);
    if (idValue) {
      this.remove();
    }
  }

  attributeChangedCallback() {
    this.attrs = this.getAttributesFromElement();
  }
}

window.customElements.define('cookie-notice', CookieNotice, { extends: 'div' });
