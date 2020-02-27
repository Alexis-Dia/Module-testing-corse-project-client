import axios from 'axios'
const project = require('../../../project.config')

import {
    APPLICATION_JSON,
    BEARER,
    JSON,
    PAGE_STATUS_200,
    PAGE_STATUS_500,
    DELIMITER,
    HTTPS,
    HTTP, PATH_METHOD_AUTH_AUTHENTICATE
} from '../../properties/properties'

export function apiCall (hostname, port, method, body) {

    var url = HTTP + hostname + DELIMITER + port + PATH_METHOD_AUTH_AUTHENTICATE;
    console.log("url = ", url)
    console.log("body = ", body)
    const options = {
        method: method,
        url: url,
        headers: {
            'Content-Type': APPLICATION_JSON,
        },
        responseType: JSON
    }
    if (body.data) {
        options.data = body.data
    }
    return axios(options)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error
        })
}

export function apiCallForLoggedUser (hostname, port, pathMethod, method, body = {data: {}}) {

    if (project.env !== 'development') {
        hostname = window.location.hostname
    }

    var url = HTTP + hostname + DELIMITER + port + pathMethod;

    const options = {
        method: method,
        url: url,
        headers: {
            'Authorization': BEARER + localStorage.jwtToken,
        },
        responseType: JSON
    };

    if (body) {
        options.data = body.data
    }
    return axios(options)
        .then(response => {
            return { 'httpStatus': PAGE_STATUS_200, 'result': response.data }
        })
        .catch(error => {
            console.error('axiosApi error = ', error);
            return  { 'httpStatus': PAGE_STATUS_500}
        })
}

