import { Component } from "react";
import { LocalizeContextProps, withLocalize, } from "react-localize-redux";

type IProps = LocalizeContextProps & {};

interface IState { };

class Page500 extends Component<IProps, IState> {

  render() {
    return (
      <div className="page-common-error">
        500
      </div>
    )
  }
}

export default withLocalize(Page500);