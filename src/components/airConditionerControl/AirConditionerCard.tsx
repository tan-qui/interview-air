import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ConnectedProps, connect } from "react-redux";
import { commonActions } from "../../store/common/common.actions";
import Icon from '../common/Icon';
import TemperatureControl from './TemperatureControl';
import ModeSelector from './ModeSelector';
import FanSpeedControl from './FanSpeedControl';
import TimerControl from './TimerControl';
import ToggleSwitch from '../common/ToggleSwitch';

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
  air: any;
};

interface IState {
  status: boolean
};

class AirConditionerCard extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      status: false,
    };

  }

  componentDidMount() {
    console.log(this.props.air);
    this.setState({
      status: this.props.air.status
    });
  }

  componentWillUnmount() {
  }

  onToggle = () => {
    let { status } = this.state;
    this.setState({
      status: !status
    });
  }

  render() {
    let { status } = this.state;
    let { air } = this.props;
    return (
      <div className='bg-[#f0f0f0] rounded-2xl p-[10px] m-[10px] shadow-md'>
        <h1 className='text-red-500'><strong>{air.name}</strong></h1>
        <Icon icon={air.icon} />
        <TemperatureControl temperature={air.temperature} />
        <ModeSelector mode={air.mode} />
        <FanSpeedControl fanSpeed={air.fanSpeed} />
        <TimerControl timer={air.timer} />
        <ToggleSwitch status={status} onToggle={() => this.onToggle()} />
      </div>
    );
  }
}


export default connector(withLocalize(AirConditionerCard));
