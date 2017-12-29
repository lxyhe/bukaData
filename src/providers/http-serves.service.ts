import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { api } from './apiAddress';

@Injectable()

export class HttpServesService {

  constructor(public http: Http) {

  }
  public get(url: string, paramObj?: any) {
    return this.http.get(url + JSON.stringify(paramObj))
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error));
  }

  public post(url: string, params?: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(url, JSON.stringify(params), new RequestOptions({ headers: headers }))
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error));
  }
  private handleSuccess(result) {

    if (result.code == 0) {
      return result;
    } else if (result.code == -1) {
      return result;
    }
  }
  private handleError(error) {
    let msg = '请求失败';
    if (error.code == -1) {
      msg = '该用户已经存在';
    }
    if (error.status == 400) {
      msg = '请求无效';
      console.log('请检查参数类型是否匹配');
    }
    if (error.status == 404) {
      msg = '请求资源不存在';
      console.error(msg + '，请检查路径是否正确');
    }
    console.log(error);
    return { success: false, msg: msg };
  }
  // private toQueryString(obj) {
  //   let ret = [];
  //   for (let key in obj) {
  //     key = encodeURIComponent(key);
  //     let values = obj[key];
  //     if (values && values.constructor == Array) {//数组
  //       let queryValues = [];
  //       for (let i = 0, len = values.length, value; i < len; i++) {
  //         value = values[i];
  //         queryValues.push(this.toQueryPair(key, value));
  //       }
  //       ret = ret.concat(queryValues);
  //     } else { //字符串
  //       ret.push(this.toQueryPair(key, values));
  //     }
  //   }
  //   return '?' + ret.join('&');
  // }
  // private toBodyString(obj) {
  //   let ret = [];
  //   for (let key in obj) {
  //     key = encodeURIComponent(key);
  //     let values = obj[key];
  //     if (values && values.constructor == Array) {//数组
  //       let queryValues = [];
  //       for (let i = 0, len = values.length, value; i < len; i++) {
  //         value = values[i];
  //         queryValues.push(this.toQueryPair(key, value));
  //       }
  //       ret = ret.concat(queryValues);
  //     } else { //字符串
  //       ret.push(this.toQueryPair(key, values));
  //     }
  //   }
  //   return ret.join('&');
  // }
  // private toQueryPair(key, value) {
  //   if (typeof value == 'undefined') {
  //     return key;
  //   }
  //   return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  // }
}
