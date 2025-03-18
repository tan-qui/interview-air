import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

type IProps = LocalizeContextProps & {
  min: number,
  max: number,
  current: number,
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
    let { min, max, current } = this.props;
    return (
      <div>
        <h3><strong>Slider:</strong></h3>
        <input readOnly className='w-full' type="range" min={min} max={max} value={current} />
      </div>
    );
  }
}


export default withLocalize(Slider);
