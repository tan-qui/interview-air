import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  status: string
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
    let { status } = this.props;
    return (
      <div>
        <h1>ToggleSwitch {status}</h1>
      </div>
    );
  }
}


export default withLocalize(ToggleSwitch);
