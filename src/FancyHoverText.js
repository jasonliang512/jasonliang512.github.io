import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import styled from 'styled-components';

const spacing = '2.5px';

const Wrapper = styled.span`
  font-family: var(--secondary-font);
  color: var(--primary-color);
  transition: 0.3s;
  letter-spacing: ${spacing};
  &:hover {
    color: var(--primary-background-color);
  }
`;

const Fill = styled(
  posed.span({
    hover: {
      scaleY: 1,
      opacity: 1,
    },
    idle: {
      scaleY: 0,
      opacity: 0,
    },
  })
)`
  background-color: var(--primary-color);
  width: calc(100% - ${spacing});
  height: 100%;
  top: 0px;
  position: absolute;
  transform-origin: left center;
  z-index: -1;
`;

class FancyHoverText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hovering: true });
  }

  handleMouseLeave() {
    this.setState({ hovering: false });
  }

  render() {
    const { hovering } = this.state;
    const { children, ...rest } = this.props;
    return (
      <Wrapper
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        {...rest}
      >
        <span style={{ position: 'relative', zIndex: -1 }}>
          <Fill className="helloworld" pose={hovering ? 'hover' : 'idle'} />
          {children}
        </span>
      </Wrapper>
    );
  }
}

FancyHoverText.propTypes = {
  children: PropTypes.string,
};

FancyHoverText.defaultProps = {
  children: '',
};

export default FancyHoverText;
