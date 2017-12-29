import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AjaxServeService } from '../../providers/ajax-serve.service';
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

  // public title = '当前机构列表';
  // public heroes = HEROES;
  public selectednamespace: namespaceObj;

  public userinfoobj: userInfoObj;
  public namespace: namespaceObj[];
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
  onSelect(item: namespaceObj): void {
    this.selectednamespace = item;
    console.log(item);
    this.router.navigate(['/roomlist']);
  }
}
