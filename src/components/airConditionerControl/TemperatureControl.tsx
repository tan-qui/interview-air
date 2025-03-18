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
  acId: number
};

interface IState {

};

class TemperatureControl extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange() {
    // TODO
  }

  render() {
    let { } = this.state;
    let { acId } = this.props;
    return (
      <div>
        <h1>TemperatureControl {acId} </h1>
        <div>
          <Slider min={1} max={30} current={2} onChange={() => this.onChange()} />
        </div>
        <div className='button-group'>
          <Button label="Increase" />
          <Button label="Decrease" />
        </div>
      </div>
    );
  }
}


export default connector(withLocalize(TemperatureControl));
