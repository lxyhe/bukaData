import { Component, OnInit, Input } from '@angular/core';
import { AjaxServeService } from '../../../providers/ajax-serve.service';
export class userInfoObj {
  user_name: string;
  token: string;
}
@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  @Input('room') roomlist;
  public userinfoobj: userInfoObj;
  constructor(
    private ajaxServe: AjaxServeService,
  ) {
    console.log(this.roomlist);
    if (this.roomlist !== "undefined") {
      this.getRoomList(this.roomlist);
    }
  }

  ngOnInit() {
    console.log("111111");
  }
  getRoomList(roomlist) {
    console.log(roomlist);
    // var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    // if (userinfo !== "" && userinfo !== undefined) {
    //   this.userinfoobj.user_name = userinfo.user_name;
    //   this.userinfoobj.token = userinfo.token;
    // }
    // var romdata = {
    //   user_name: this.userinfoobj.user_name,
    //   token: this.userinfoobj.token,
    //   namespace: roomlist.namespace,//机构名
    //   page: 1,					//页码
    //   int: 10		// 页数
    // }
    // this.ajaxServe.roomlist(romdata)
    //   .then((data) => {
    //     console.log(data);
    //   }).catch((err) => {

    //   })
  }
}
