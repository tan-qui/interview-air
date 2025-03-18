import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  label: string
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
      <div className='button'>
        <button>
          <strong>{label}</strong>
        </button>
      </div>
    );
  }
}


export default withLocalize(Button);
