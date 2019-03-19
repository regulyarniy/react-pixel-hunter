import getAnswerResult from './getAnswerResult';
import {AnswerResult} from "../constants/constants";

describe(`getAnswerResult utility`, () => {
  it(`should return wrong answer result for non-valid answer`, () => {
    expect(getAnswerResult({isValid: false, timeLeft: 18})).toBe(AnswerResult.WRONG);
  });

  it(`should return correct answer result for valid answer`, () => {
    expect(getAnswerResult({isValid: true, timeLeft: 18})).toBe(AnswerResult.CORRECT);
  });

  it(`should return fast answer result for valid fast answers`, () => {
    expect(getAnswerResult({isValid: true, timeLeft: 29})).toBe(AnswerResult.FAST);
  });

  it(`should return slow answer result for valid slow answers`, () => {
    expect(getAnswerResult({isValid: true, timeLeft: 5})).toBe(AnswerResult.SLOW);
  });

  it(`should return wrong answer result for non-valid fast answers`, () => {
    expect(getAnswerResult({isValid: false, timeLeft: 29})).toBe(AnswerResult.WRONG);
  });

  it(`should return wrong answer result for non-valid slow answers`, () => {
    expect(getAnswerResult({isValid: false, timeLeft: 5})).toBe(AnswerResult.WRONG);
  });

  it(`should return fast answer result for valid fast answers with time equals fast threshold`, () => {
    expect(getAnswerResult({isValid: true, timeLeft: 20})).toBe(AnswerResult.FAST);
  });

  it(`should return correct answer result for valid answers with time equals slow threshold`, () => {
    expect(getAnswerResult({isValid: true, timeLeft: 10})).toBe(AnswerResult.CORRECT);
  });

  it(`should return unknown answer result for empty input`, () => {
    expect(getAnswerResult()).toBe(AnswerResult.UNKNOWN);
  });

  it(`should return unknown answer result for null input`, () => {
    expect(getAnswerResult(null)).toBe(AnswerResult.UNKNOWN);
  });
});
