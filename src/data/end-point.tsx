// URL Prefix
const publicPrefix = `/v1`;

export const endPoint = {
  AIR: {
    GET_STATUS: `${publicPrefix}/get-status:acId`,
    SET_TEMPERATURE: `${publicPrefix}/set-temperature`,
    SET_MODE: `${publicPrefix}/set-mode`,
    SET_FAN_SPEED: `${publicPrefix}/set-fan-speed`,
    SET_TIMER: `${publicPrefix}/set-timer`,
    TOGGER_POWER: `${publicPrefix}/togger-power`,
  },
};

