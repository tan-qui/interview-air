import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  icon: string;
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
    let { icon } = this.props;
    return (
      <div>
        <h3><strong>Icon:</strong> {icon}</h3>
      </div>
    );
  }
}


export default withLocalize(Icon);
