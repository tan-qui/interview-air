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
  acId: number;
};

interface IState {

};

class AirConditionerCard extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {
    console.log(this.props.acId);
  }

  componentWillUnmount() {
  }

  render() {
    let { acId } = this.props;
    let { } = this.state;
    return (
      <div className='air-conditioner-card'>
        <h1>AirConditionerCard with {acId}</h1>
        <div>
          <Icon type="ac-status" />
          <TemperatureControl acId={acId} />
          <ModeSelector acId={acId} />
          <FanSpeedControl acId={acId} />
          <TimerControl acId={acId} />
          <ToggleSwitch status={"on"} />
        </div>
      </div>
    );
  }
}


export default connector(withLocalize(AirConditionerCard));
