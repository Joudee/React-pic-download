'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./index.css');

var MyComponent = function (_React$Component) {
    _inherits(MyComponent, _React$Component);

    function MyComponent(props) {
        _classCallCheck(this, MyComponent);

        return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));
    }

    _createClass(MyComponent, [{
        key: 'handleClick',
        value: function handleClick(e) {
            var Images = this.cacheExternalImage(this.props.config.href),
                canvas = this.refs.canvas;

            this.refs.download.href = canvas.toDataURL("image/jpeg", 1.0);
            this.refs.download.download = this.props.config.fileName + ".png";
        }
    }, {
        key: 'cacheExternalImage',
        value: function cacheExternalImage(url) {
            var img = new Image(),
                src = url,
                cvs = document.createElement('canvas'),
                ctx = cvs.getContext('2d');
            img.crossOrigin = "Anonymous";
            img.src = src;
            return img;
        }
    }, {
        key: 'drawCanvas',
        value: function drawCanvas() {
            var Images = new Image(),
                img = this.cacheExternalImage(this.props.config.href),
                that = this,
                canvas = this.refs.canvas,
                ctx = canvas.getContext('2d');
            Images.src = this.props.config.href;
            Images.onload = function () {
                canvas.style.height = img.height + 'px';
                canvas.style.width = img.width + 'px';
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0, img.width, img.height);
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.drawCanvas();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'a',
                { className: 'react-pic-download', onClick: this.handleClick.bind(this), ref: 'download', style: this.props.config.buttonStyle ? this.props.config.buttonStyle : {} },
                this.props.config.btName,
                _react2.default.createElement('canvas', { ref: 'canvas', style: { display: 'none' } })
            );
        }
    }]);

    return MyComponent;
}(_react2.default.Component);

exports.default = MyComponent;
//# sourceMappingURL=index.js.map