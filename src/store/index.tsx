import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app.reducer';

const logMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log('Dispatching action:', action);
  let result = next(action);
  console.log('Next state:', storeAPI.getState());
  return result;
};

const customMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log('storeAPI:', storeAPI);
  console.log('Custom Middleware Triggered:', action);
  return next(action);
};

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware, customMiddleware),
})

export default store

