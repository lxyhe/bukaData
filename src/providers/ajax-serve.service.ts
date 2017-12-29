import { Injectable } from '@angular/core';
import { HttpServesService } from './http-serves.service';
import { api } from './apiAddress';


@Injectable()


export class AjaxServeService {
  constructor(private http: HttpServesService) { }
  public login(loginobj) {
    return this.http.post(api.userlogin, loginobj);
  }
  public register(registerobj) {
    return this.http.post(api.userRegister, registerobj);
  }
  public getTtends(Ttendsobj) {
    return this.http.post(api.getTtends, Ttendsobj);
  }
  public namespacelist(namespaceList) {
    return this.http.post(api.namespacelist, namespaceList);
  }
  public roomlist(roomList) {
    return this.http.post(api.roomlist, roomList);
  }
  public getstreamtrend(getstreamTrend) {
    return this.http.post(api.getstreamtrend, getstreamTrend);
  }
  public getstreaminfo(getstreamInfo) {
    return this.http.post(api.getstreaminfo, getstreamInfo);
  }
}
