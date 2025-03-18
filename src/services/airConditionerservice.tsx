import { endPoint } from "../data/endPoint";
import { serviceApi } from "./api.service";

export const airConditionerservice = {
  getStatus,
  setTemperature,
  setMode,
  setFanSpeed,
  setTimer,
  toggerPower,
};

function getStatus(acId: number) {
  return serviceApi.get(process.env.REACT_APP_BASE_API + endPoint.AIR.GET_STATUS.replace(":acId", acId.toString()));
}

function setTemperature(acId: number, temperature: any) {
  return serviceApi.post(process.env.REACT_APP_BASE_API + endPoint.AIR.SET_TEMPERATURE, { acId, temperature });
}

function setMode(acId: number, mode: any) {
  return serviceApi.post(process.env.REACT_APP_BASE_API + endPoint.AIR.SET_MODE, { acId, mode });
}

function setFanSpeed(acId: number, fanSpeed: any) {
  return serviceApi.post(process.env.REACT_APP_BASE_API + endPoint.AIR.SET_FAN_SPEED, { acId, fanSpeed });
}

function setTimer(acId: number, timerValue: any) {
  return serviceApi.post(process.env.REACT_APP_BASE_API + endPoint.AIR.SET_TIMER, { acId, timerValue });
}

function toggerPower(acId: number, state: any) {
  return serviceApi.post(process.env.REACT_APP_BASE_API + endPoint.AIR.TOGGER_POWER, { acId, state });
}