import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { LocalizeProvider } from "react-localize-redux";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/scss/main.scss";
import { BrowserRouter, useNavigate, } from 'react-router-dom';
import { setNavigate } from './navigate-service.';
import AirConditionerDashboard from './pages/AirConditionerDashboard';

const AppWithNavigate = () => {
  const navigate = useNavigate();
  setNavigate(navigate);
  return <AirConditionerDashboard />;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <LocalizeProvider>
      <BrowserRouter>
        <AppWithNavigate />
      </BrowserRouter>
    </LocalizeProvider>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

