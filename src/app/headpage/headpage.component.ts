import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export class userInfoObj {
  user_name: string;
  token: string;
}
@Component({
  selector: 'app-headpage',
  templateUrl: './headpage.component.html',
  styleUrls: ['./headpage.component.css']
})
export class HeadpageComponent implements OnInit {
  public userinfoobj: userInfoObj;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.userinfoobj = new userInfoObj();
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
    }
  }
  quit() {
    if (localStorage.getItem('userInfo') !== "") {
      localStorage.removeItem('userInfo');
      // this.router.navigate(['/roomlist']);
      this.router.navigate(['/loging']);
    }

  }

}
