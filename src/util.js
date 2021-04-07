'use strict';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomBool = () => {
  Boolean(getRandomInt(0, 1));
};

const getRandomArrayElement = (array) =>  {
  if (array.length === 0) {
    return null;
  }
  return array[getRandomInt(0, array.length)];
};

export {getRandomInt, getRandomBool, getRandomArrayElement};
