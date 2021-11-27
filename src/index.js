import { NUMBER_RULES, RESULT_MESSAGE, VERIFIED_CODE } from './constants.js';

export default class BaseballGame {

  constructor() {
    this.$userInput = document.getElementById('user-input');
  }

  play(computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  }

  generateComputerRandomNumber() {
    const computerNumberList =  new Set();

    while (computerNumberList.size < NUMBER_RULES.LENGTH)
      computerNumberList.add(MissionUtils.Random.pickNumberInRange(NUMBER_RULES.MIN_NUMBER, NUMBER_RULES.MAX_NUMBER));

    return Array.from(computerNumberList).join('');
  }

  verifyInputNumber(userInputValue) {
    if (isNaN(userInputValue)) {
      return VERIFIED_CODE.NOT_A_NUMBER;
    } else if (userInputValue.includes(0)) {
      return VERIFIED_CODE.ZERO_INCLUDED;
    } else if (userInputValue.length < NUMBER_RULES.LENGTH) {
      return VERIFIED_CODE.THREE_DIGIT;
    } else if (new Set(userInputValue).size !== NUMBER_RULES.LENGTH) {
      return VERIFIED_CODE.NUMBER_DUPLICATED;
    }
    return VERIFIED_CODE.VERIFIED;
  }

}