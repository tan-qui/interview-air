import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  min: number,
  max: number,
  current: number,
  onChange: () => void
};

interface IState {

};

class Slider extends Component<IProps, IState> {
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
    let { min, max, current, onChange } = this.props;
    return (
      <div>
        <h1>Slider {min} - {max} - {current}</h1>
      </div>
    );
  }
}


export default withLocalize(Slider);
