'use strict'

/*    outcome/
 * Check if we have the nodejs crypto module, or the windows.crypto
 * is available (on server or client?) or drop down to the simplest
 * available solution - Math.random()
 *
 * For each of these, get a set of bytes, convert to a string
 * representation and return.
 */
function uuid(len) {
  if(!len) len = 8
  if(is_window_crypto_1()) return windows_crypto_uuid_1()
  if(is_nodejs_crypto_1()) return nodejs_crypto_uuid_1()
  return math_random_uuid_1()

  function math_random_uuid_1() {
    let v = ""
    while(v.length < len) {
      let r = Math.random()
      v += r.toString(36).substring(2)
    }
    return v.substring(0,len)
  }

  function is_nodejs_crypto_1() {
    return typeof module !== 'undefined'
      && typeof require === 'function'
  }

  function is_window_crypto_1() {
    return typeof window !== 'undefined'
      && typeof window.crypto !== 'undefined'
      && typeof window.crypto.getRandomValues == 'function'
  }

  function nodejs_crypto_uuid_1() {
    let crypto = require('crypto')
    return rand_1(a => crypto.randomFillSync(a))
  }

  function windows_crypto_uuid_1() {
    return rand_1(a => window.crypto.getRandomValues(a))
  }

  function rand_1(fn) {
    let a = new Uint8Array(len)
    fn(a)
    let map = "abcdefghijklmnopqrstuvuwxyz0123456789"
    let v = ""
    for(let i = 0;i < a.length;i++) {
      v += map[a[i] % map.length]
    }
    return v
  }

}


module.exports = uuid
