'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var _ = require('lodash');

var API_URL = 'http://localhost:8000';

function getImageURL(props) {
  return API_URL + '/images/' + props.id.replace(/ /g, '-') + '/';
}

var styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
};

var DivImage = function (_React$Component) {
  _inherits(DivImage, _React$Component);

  function DivImage() {
    _classCallCheck(this, DivImage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DivImage).apply(this, arguments));
  }

  _createClass(DivImage, [{
    key: 'render',
    value: function render() {
      var extraStyle = {
        backgroundImage: 'url(' + getImageURL(this.props) + ')'
      };
      if (this.props.width) extraStyle.width = this.props.width;
      if (this.props.height) extraStyle.height = this.props.height;
      var style = _.merge({}, styles.container, this.props.style, extraStyle);
      return React.createElement('div', { style: style });
    }
  }]);

  return DivImage;
}(React.Component);

DivImage.propTypes = {
  id: React.PropTypes.string.isRequired,
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  style: React.PropTypes.object
};

var Image = function (_React$Component2) {
  _inherits(Image, _React$Component2);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      return React.createElement('img', {
        src: getImageURL(this.props),
        width: this.props.width,
        height: this.props.height
      });
    }
  }]);

  return Image;
}(React.Component);

Image.propTypes = {
  id: React.PropTypes.string,
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
};


module.exports = {
  DivImage: DivImage,
  Image: Image
};