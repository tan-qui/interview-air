import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ConnectedProps, connect } from "react-redux";
import { commonActions } from "../../store/common/common.actions";
import Slider from '../common/Slider';
import Button from '../common/Button';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    startSpin: commonActions.startSpin,
    stopSpin: commonActions.stopSpin,
  }, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux & LocalizeContextProps & {
  temperature: any
};

interface IState {
  current: number

};

class TemperatureControl extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      current: 0
    };

  }

  componentDidMount() {
    this.setState({
      current: this.props.temperature.current
    });
  }

  componentWillUnmount() {
  }

  onClick = (type: string) => {
    console.log("type", type);
    let { current } = this.state;
    if (type === "Incr" && current < this.props.temperature.max) {
      current++;
    }
    else if (type === "Decr" && current > this.props.temperature.min) {
      current--;
    }
    this.setState({
      current: current
    });

  }

  render() {
    let { current } = this.state;
    let { temperature } = this.props;
    return (
      <div>
        <div>
          <Slider min={temperature.min} max={temperature.max} current={current} />
        </div>
        <div className='flex justify-between gap-12'>
          <Button label="Decrease" onClick={() => this.onClick("Decr")} />
          <Button label="Increase" onClick={() => this.onClick("Incr")} />
        </div>
      </div>
    );
  }
}


export default connector(withLocalize(TemperatureControl));
