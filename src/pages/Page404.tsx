import { Component } from "react";
import { LocalizeContextProps, Translate, withLocalize, } from "react-localize-redux";

type IProps = LocalizeContextProps & {};

interface IState { };

class Page404 extends Component<IProps, IState> {

  render() {
    return (
      <div className="page-common-error">
        404
      </div>
    )
  }
}

export default withLocalize(Page404);