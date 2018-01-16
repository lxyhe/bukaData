import { Component, OnInit, OnDestroy } from '@angular/core';
import { AjaxServeService } from '../../providers/ajax-serve.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
export class userInfoObj {
  user_name: string;
  token: string;
}
declare var $;
@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  public namespace;
  public userinfoobj: userInfoObj;
  public roomlist;
  public roomInfo;
  public publishInfo;
  public isshow: boolean;
  public isshow_1: boolean;
  public title: string;
  public namscpaceInfo = [];
  public stremID;
  public userInfo = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ajaxServe: AjaxServeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.namespace = params['namespace'];

    });
    this.getroomlist();
  }
  getroomlist() {
    this.userinfoobj = new userInfoObj();
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))

    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var romdata = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      namespace: this.namespace,
      page: 1,
      cnt: 20,

    }
    this.ajaxServe.roomlist(romdata)
      .then((data) => {

        if (data.code == 0 && data.data.data.length !== 0) {
          this.roomlist = data.data.data;
        } else {
        }

      }).catch((err) => {

      })
  }
  getRoomInfo(data) {
    console.log(data);
    this.userinfoobj = new userInfoObj();
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var romdata = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      key: "room",
      value: data.room
    }
    this.ajaxServe.getTtends(romdata)
      .then((data) => {
        if (data.code == 0 && data.data.length !== 0) {
          this.roomInfo = data.data;
        } else {
        }
        console.log(data);
      }).catch((err) => {

      })
  }
  goPublisInfo(datas) {
    this.title = "发布者详情";
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var postData1 = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      types: 1,
      id: datas.id
    }
    this.ajaxServe.getstreaminfo(postData1).then(data => {

      if (data.code == 0) {
        if (data.data != []) {
          this.publishInfo = data.data;
          console.log(this.publishInfo);
          this.isshow = true;
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })


  }
  goplaysInfo(datas) {
    console.log("播放者信息");
    this.title = "播放着详情"
    // var options = {
    //   keyboard: true,
    //   show: true,
    // }
    // $('#myModal_1').modal(options)
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var postData1 = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      types: 2,
      id: datas.id
    }
    this.ajaxServe.getstreaminfo(postData1).then(data => {

      if (data.code == 0) {
        if (data.data != []) {
          this.publishInfo = data.data;
          console.log(this.publishInfo);
          this.isshow = true;
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })

  }
  getStrem() {
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var postData1 = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      stream: this.stremID
    }
    this.ajaxServe.getstreamtrend(postData1).then(data => {
      if (data.code == 0) {
        if (data.data != []) {
          this.namscpaceInfo = data.data;
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })


  }

  getUserInfo(data) {
    console.log(data);
    var options = {
      keyboard: true,
      show: true,
    }
    $('#myModal').modal(options)
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var postData1 = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      key: "user",
      value: data,
    }
    this.ajaxServe.getTtends(postData1).then(data => {

      if (data.code == 0) {
        if (data.data != []) {
          this.userInfo = data.data;
          console.log(this.userInfo);
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }
  goUserList(items) {
    console.log(items);
    this.router.navigate(['/userlist', { roomid: items.room }]);
  }
}
