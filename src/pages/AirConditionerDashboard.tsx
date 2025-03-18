import { Component } from 'react';
import english from "../langs/en.translations.json";
import vietnam from "../langs/vi.translations.json";
import { LocalizeContextProps, withLocalize } from "react-localize-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { ConnectedProps, connect } from "react-redux";
import { commonActions } from '../store/common/common.actions';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AirConditionerCard from '../components/airConditionerControl/AirConditionerCard';


const mapStateToProps = (state: any) => {
  return {
    loadSpin: state.commonReducer.loadSpin,
  };
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
  loadSpin?: any;
};

interface IState {
};

class App extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.props.initialize({
      languages: [
        { code: "en", name: "English", },
        { code: "vi", name: "VietNam", },
      ],
      translation: english,
      options: {
        onMissingTranslation: ({ translationId }) => translationId,
        renderToStaticMarkup: false,
        renderInnerHtml: true,
        defaultLanguage: "en",
      },
    });
    this.props.addTranslationForLanguage(english, "en");
    this.props.addTranslationForLanguage(vietnam, "vi");

  }

  componentDidMount() {
  }

  componentWillUnmount(): void {
  }

  render() {

    return (
      // TODO add loading spinner
      <div>
        <Header />
        <div>
          {/* Repeat AirConditionerCard for multiple ACs */}
          <AirConditionerCard acId={1} />
          <AirConditionerCard acId={2} />
        </div>
        <Footer />
      </div>
    );
  }
}


export default connector(withLocalize(App));
