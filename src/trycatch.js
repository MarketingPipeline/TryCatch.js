/**!
 * @license TryCatch.js - A JavaScript library to handle errors in a more clean structured way.
 * VERSION: 1.0.0
 * LICENSED UNDER MIT LICENSE
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/TryCatch.js/
 */
export function tryCatch(tryFn, catchFn, finallyFn, elseFn) {
  try {
    const tryResult = tryFn();
    if (elseFn && typeof tryResult === "undefined") {
      return elseFn();
    } else {
      return tryResult;
    }
  } catch (e) {
    if (catchFn) {
      return catchFn(e);
    } else {
      throw e;
    }
  } finally {
    if (finallyFn) {
      finallyFn();
    }
  }
}
