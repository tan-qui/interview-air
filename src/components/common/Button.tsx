import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  label: string
  onClick?: () => void
};

interface IState {

};

class Button extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    let { } = this.state;
    let { label } = this.props;
    return (
      <div>
        <button
          onClick={this.props.onClick}
          className="px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
        >
          <span>{label}</span>
        </button>
      </div>
    );
  }
}


export default withLocalize(Button);
