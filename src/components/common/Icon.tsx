import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  type: string;
};

interface IState {

};

class Icon extends Component<IProps, IState> {
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
    let { type } = this.props;
    return (
      <div>
        <h1>Icon {type}</h1>
      </div>
    );
  }
}


export default withLocalize(Icon);
