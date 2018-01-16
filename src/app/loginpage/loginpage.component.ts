import { Component, OnInit } from '@angular/core';
import { AjaxServeService } from '../../providers/ajax-serve.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
declare var $;
export class loginObj {
  user_name: string | number;
  user_password: string | number;
}
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginobj: loginObj;
  values = "";
  constructor(
    private ajaxServe: AjaxServeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.loginobj = new loginObj();
  }
  ngOnInit() {
    // var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    // if (userinfo == "" || userinfo == null) {
    //   this.router.navigate(['/loging']);
    // } else {
    //   this.router.navigate(['/main']);
    // }
  }
  loging() {
    if (this.loginobj.user_name !== "" && this.loginobj.user_password !== "") {
      this.ajaxServe.login(this.loginobj).then((data) => {
        console.log(data);
        if (data.code == 0) {
          if (data.data.token !== "") {
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            // var a = JSON.parse(localStorage.getItem('userInfo'));
            //this.router.navigate(['/realtime'])
            this.router.navigate(['/main'])
          }
        } else if (data.code == -1) {
          alert(data.msg);
        }
      })
    } else {
      console.log("账号密码不能为空");
    }


  }

}
