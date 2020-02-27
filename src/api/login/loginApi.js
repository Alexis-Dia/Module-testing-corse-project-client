import golos from 'golos-js'
import { LOGIN_DEV_USER, LOGIN_NUMBER_OF_LINE, LOGIN_START_POSITION } from './loginProperties'

export function fetchAuth (ob) {

  return getAccounts = new Promise((resolve, reject) => {
    golos.api.getAccountHistory(LOGIN_DEV_USER, LOGIN_START_POSITION, LOGIN_NUMBER_OF_LINE, (err, result) => {
      if (err) reject(err);
      else {
        resolve(result);
      }
    });
  }).then(response => response);

}

export function fetchLoginWithGolos(data) {

  var arr =[];
  var username = data.data.user.username;
  arr.push(username);

  return new Promise((resolve, reject) => {
    golos.api.getAccounts(arr, (err, result) => {
      if (err) reject(err);
      else {
        resolve(result);
      }
    });
  })

}

export function fetchPrivateKeyWithGolos(data) {
  var wif = data.data.user.password;
  var resultIsWif = golos.auth.isWif(wif);
  return [ resultIsWif, wif ]
}
