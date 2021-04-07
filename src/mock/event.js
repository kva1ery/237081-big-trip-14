'use strict';

import {EVENT_TYPES} from '../references.js';
import {getRandomArrayElement} from '../util.js';

const generateEvent = () => {
  return {
    type: getRandomArrayElement(EVENT_TYPES),
  };
};

export {generateEvent};
