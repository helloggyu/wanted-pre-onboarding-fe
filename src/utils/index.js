/**
 * @function
 * @param {Function} promisifiedFunc
 * @param {Array} arg
 * @return {Promise<{error: any, errorCode: string, result: null}|{error: null, errorCode: '', result: any}>}
 * @example
 * await aptc(promiseFunc, arg1, arg2)
 */

export default function aptc(promisifiedFunc, ...arg) {
  return new Promise((resolve, reject) => {
    promisifiedFunc(...arg)
      .then((res) => {
        resolve({
          errorCode: res.code || null,
          result: res.data,
        });
      })
      .catch((error) => {
        console.error('API Error => ', error);
      });
  });
}
