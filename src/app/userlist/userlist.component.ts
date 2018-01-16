import { Component, OnInit } from '@angular/core';
import { AjaxServeService } from '../../providers/ajax-serve.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
export class userInfoObj {
  user_name: string;
  token: string;
}
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public userlist;
  public roomid;
  public userinfoobj: userInfoObj;
  public userInfo;
  public isshow: boolean;
  public title: string;
  public publishInfo;
  public stremID;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ajaxServe: AjaxServeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.roomid = params['roomid'];

    });
    this.getuserlist();
  }
  getuserInfo(data) {
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
      key: "user",
      value: data.user
    }
    this.ajaxServe.getTtends(romdata)
      .then((data) => {
        if (data.code == 0 && data.data.length !== 0) {
          this.userInfo = data.data;
        } else {
        }
        console.log(data);
      }).catch((err) => {

      })

  }
  getuserlist() {
    console.log(this.roomid);
    this.userinfoobj = new userInfoObj();
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))

    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var romdata = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      room: this.roomid,
      page: 1,
      cnt: 20,

    }
    this.ajaxServe.getUserlist(romdata)
      .then((data) => {
        console.log(data);
        if (data.code == 0 && data.data.data.length !== 0) {
          this.userlist = data.data.data;
          console.log(this.userlist)
        } else {
        }

      }).catch((err) => {

      })

  };
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
}
