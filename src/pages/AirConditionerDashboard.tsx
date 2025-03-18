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

const lstAirFake = [
  {
    id: 1,
    name: "Living Room",
    icon: "icon on",
    temperature: {
      current: 23,
      min: 18,
      max: 30,
    },
    fanSpeed: "auto",
    mode: "cool",
    timer: 10,
    status: true,
  },
  {
    id: 2,
    name: "Bed Room",
    icon: "icon off",
    temperature: {
      current: 23,
      min: 16,
      max: 32,
    },
    mode: "hot",
    fanSpeed: 46,
    timer: 15,
    status: false,
  },
  {
    id : 3,
    name: "Kitchen",
    icon: "icon off",
    temperature: {
      current: 22,
      min: 12,
      max: 33,
    },
    mode: "cool",
    fanSpeed: 36,
    timer: 20,
    status: true,
  }

];

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
        <div className='p-[120px] flex flex-wrap justify-center gap-1'>
          {/* Repeat AirConditionerCard for multiple ACs */}
          {
            lstAirFake.map((item, index) => {
              return <AirConditionerCard key={index} air={item} />
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}


export default connector(withLocalize(App));
