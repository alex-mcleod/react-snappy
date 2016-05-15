const React = require('react');
const _ = require('lodash');

const API_URL = 'http://localhost:8000';

function getImageURL(props) {
  return `${ API_URL }/images/${ props.id.replace(/ /g, '-') }/`;
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
};

class DivImage extends React.Component {

  render() {
    const extraStyle = {
      backgroundImage: 'url(' + getImageURL(this.props) + ')'
    };
    if (this.props.width) extraStyle.width = this.props.width;
    if (this.props.height) extraStyle.height = this.props.height;
    const style = _.merge({}, styles.container, this.props.style, extraStyle);
    return React.createElement('div', { style: style });
  }
}

DivImage.propTypes = {
  id: React.PropTypes.string.isRequired,
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  style: React.PropTypes.object
};
class Image extends React.Component {

  render() {
    return React.createElement('img', {
      src: getImageURL(this.props),
      width: this.props.width,
      height: this.props.height
    });
  }
}

Image.propTypes = {
  id: React.PropTypes.string,
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
};
module.exports = {
  DivImage,
  Image
};