import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  status: boolean,
  onToggle?: () => void
};

interface IState {

};

class ToggleSwitch extends Component<IProps, IState> {
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
    let { status, onToggle } = this.props;
    return (
      <div className='flex'>
        <h3 className='pr-2'><strong>Toggle switch:</strong></h3>
        <button
          onClick={onToggle}
          className={`relative w-14 h-6 flex items-center bg-gray-300 rounded-full p-1 transition-colors duration-300 ${status ? "bg-green-500" : "bg-gray-400"
            }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${status ? "translate-x-6" : "translate-x-0"
              }`}
          ></div>
        </button>
      </div >
    );
  }
}


export default withLocalize(ToggleSwitch);
