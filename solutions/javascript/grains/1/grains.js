/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

export const square = (num) => {
  if (num <= 0 || num > 64) {
    throw 'square must be between 1 and 64'
  }
  return BigInt(2 ** (num - 1))
};

export const total = () => {
  return 2n ** 64n - 1n
};
