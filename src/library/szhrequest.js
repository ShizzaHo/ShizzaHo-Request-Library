/*

  * ShizzaHo Request Library
  ? Version: 1.0

*/

class szhRequest {
  /**
   * Sends the request to the server
   * @param url URL to send the request to the server.
   * @param options Options for the query, takes keys such as: method, header, body, params, redirect.
   */
  send = async (url = undefined, options = {}) => {
    if (urlIsEmpty(url)) {
      throw new Error('Incorrect data, missing arguments');
    } else {
      const headers = new Headers();
      const body = new URLSearchParams();
      let params = '';

      //Checking the existence of the Header
      headerExists(options, () => {
        objectToArray(options.header).map((item) => {
          headers.append(item[0], item[1]);
        });
      });

      //Checking the existence of the Body
      bodyExists(options, () => {
        objectToArray(options.body).map((item) => {
          body.append(item[0], item[1]);
        });
      });

      paramsExists(options, () => {
        let paramsArray = [];
        objectToArray(options.params).map((item) => {
          paramsArray.push(`${item[0]}=${item[1]}`);
        });
        params = '?' + paramsArray.join('&');
      });

      //Settings for the request
      let requestOptions = {
        method: options.method.toUpperCase(),
        headers: headers,
        redirect: options.redirect || 'follow',
      };

      //Checking for request type, GET or HEAD
      if (!isGetOrHead(options.method.toUpperCase())) {
        requestOptions = {
          ...requestOptions,
          body: body,
        };
      }
      //Executing the request, and sending the result back
      const response = await fetch(url + params, requestOptions);
      return await response;
    }
  };
}

/**
 * Translates JSON Object into an array
 * @param obj Receives JSON object, to be converted into an array
 */
const objectToArray = (obj) => {
  let res = [];

  if (obj != undefined) {
    for (let i in Object.keys(obj)) {
      const objKey = Object.keys(obj)[i];
      res.push([objKey, obj[objKey]]);
    }
  }

  return res;
};

/**
 * Checks the existence of the URL in the argument
 * @param url URL to send the request to the server.
 */
const urlIsEmpty = (url) => {
  if (url == undefined || url == '' || url == null) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks what type of request will be made GET or HEAD
 * @param method request type
 */
const isGetOrHead = (method) => {
  if (method.toUpperCase() != 'GET' || method.toUpperCase() != 'HEAD') {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks the existence of the Header
 * @param options Request options
 * @param callback The callback function will be called if the header exists
 */
const headerExists = (options, callback) => {
  if (
    !options.header == undefined ||
    !options.header == '' ||
    !options.header == null
  ) {
    return callback();
  }
};

/**
 * Checks the existence of the Body
 * @param options Request options
 * @param callback The callback function will be called if the body exists
 */
const bodyExists = (options, callback) => {
  if (
    !options.body == undefined ||
    !options.body == '' ||
    !options.body == null
  ) {
    return callback();
  }
};

/**
 * Checks the existence of the Params
 * @param options Request options
 * @param callback The callback function will be called if the params exists
 */
const paramsExists = (options, callback) => {
  if (
    !options.params == undefined ||
    !options.params == '' ||
    !options.params == null
  ) {
    return callback();
  }
};

export default new szhRequest();
