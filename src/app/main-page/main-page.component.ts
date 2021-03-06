import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AjaxServeService } from '../../providers/ajax-serve.service';

declare var $;
export class userInfoObj {
  user_name: string;
  token: string;
}
export class namespaceObj {
  count: number;
  namespace: any;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  public publishInfo;
  public isshow: boolean;
  public isshow_1: boolean;
  public title: string;
  public userinfoobj: userInfoObj;
  public namespace: namespaceObj[];
  public namscpaceInfo = [];
  public stremID;
  public userInfo = [];



  //public isLoading: boolean = false;

  public isShowRoomList: boolean = false;
  constructor(
    private router: Router,
    private ajaxServe: AjaxServeService,
  ) { }

  ngOnInit() {
    this.userinfoobj = new userInfoObj();
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    console.log(this.userinfoobj);
    this.ajaxServe.namespacelist(this.userinfoobj)
      .then((data) => {
        console.log(data);
        if (data.code == 0 && data.data.length !== 0) {
          this.namespace = data.data;
        } else {
        }
      })
      .catch(err => {
        console.log(err);
      })

  }
  quit() {
    if (localStorage.getItem('userInfo') !== "") {
      localStorage.removeItem('userInfo');
      // this.router.navigate(['/roomlist']);
      this.router.navigate(['/loging']);
    }
  }
  onSelect(item: namespaceObj, index: number): void {
    console.log(item);
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var postData1 = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      key: "namespace",
      value: item.namespace,
    }
    this.ajaxServe.getTtends(postData1).then(data => {

      if (data.code == 0) {
        if (data.data != []) {
          this.namscpaceInfo = data.data;
          console.log(this.namscpaceInfo);
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }
  goRoomList(items) {
    this.router.navigate(['/roomlist', { namespace: items.namespace }]);
  }
  goPublisInfo(datas) {
    this.title = "发布者详情";
    // var options = {
    //   keyboard: true,
    //   show: true,
    // }
    // $('#myModal').modal(options)
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
  goRealTime() {
    this.router.navigate(['/realtime']);
  }
  goRealMap() {
    this.router.navigate(['/map']);
  }
}
