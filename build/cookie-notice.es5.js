'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CookieNotice = function (_HTMLElement) {
  _inherits(CookieNotice, _HTMLElement);

  _createClass(CookieNotice, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ["id"];
    }
  }]);

  function CookieNotice() {
    _classCallCheck(this, CookieNotice);

    var _this = _possibleConstructorReturn(this, (CookieNotice.__proto__ || Object.getPrototypeOf(CookieNotice)).call(this));

    _this.attrs = _this.getAttributesFromElement();
    _this.elements = _this.getElements();
    _this.bindEvents();
    _this.checkVisibility();
    return _this;
  }

  _createClass(CookieNotice, [{
    key: 'getAttributesFromElement',
    value: function getAttributesFromElement() {
      return {
        id: this.getAttribute('id')
      };
    }
  }, {
    key: 'getElements',
    value: function getElements() {
      return {
        acceptLinks: this.querySelectorAll('[data-accept]')
      };
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this2 = this;

      this.elements.acceptLinks.forEach(function (link) {
        link.addEventListener('click', _this2.handleAcceptLink.bind(_this2));
      });
    }
  }, {
    key: 'handleAcceptLink',
    value: function handleAcceptLink(e) {
      e.preventDefault();
      window.localStorage.setItem('ce-cookie-notice___' + this.id, true);
      this.checkVisibility();
    }
  }, {
    key: 'checkVisibility',
    value: function checkVisibility() {
      var idValue = window.localStorage.getItem('ce-cookie-notice___' + this.id);
      if (idValue) {
        this.remove();
      }
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback() {
      this.attrs = this.getAttributesFromElement();
    }
  }]);

  return CookieNotice;
}(HTMLElement);

window.customElements.define('cookie-notice', CookieNotice, { extends: 'div' });
