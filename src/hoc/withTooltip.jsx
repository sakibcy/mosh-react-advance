import React from "react";

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = {
      showTooltip: false,
    };

    showTooltip = () => {
        this.setState({ showTooltip: true });
    }

    removeTooltip = () => {
        this.setState({ showTooltip: false})
    }

    render() {
      return (
        <div onMouseOver={this.showTooltip} onMouseOut={this.removeTooltip} >
          <Component showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withTooltip;
