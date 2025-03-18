import { Component } from 'react';
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ConnectedProps, connect } from "react-redux";
import { commonActions } from "../../store/common/common.actions";

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
  timer: number
};

interface IState {

};

class TimerControl extends Component<IProps, IState> {
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
    let { timer } = this.props;
    return (
      <div>
        <h3><strong>Timer control:</strong> {timer} second</h3>
      </div>
    );
  }
}


export default connector(withLocalize(TimerControl));
