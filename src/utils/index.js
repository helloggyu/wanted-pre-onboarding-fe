/**
 * @function
 * @param {Function} promisifiedFunc
 * @param {Array} arg
 * @return {Promise<{ result: null}|{error: null,}>}
 * @example
 * await aptc(promiseFunc, arg1, arg2)
 */

export default function aptc(promisifiedFunc, ...arg) {
  return new Promise((resolve, reject) => {
    promisifiedFunc(...arg)
      .then((res) => {
        resolve({
          result: res.data,
        });
      })
      .catch((error) => {
        console.error('API Error => ', error);
        resolve({ error, isError: true });
      });
  });
}
