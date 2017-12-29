import { Component, OnInit } from '@angular/core';
import { AjaxServeService } from '../../providers/ajax-serve.service';

export class reigsterObj {
  user_name: string | number;
  user_password: string | number;
  register_pwd: string;
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],

})
export class RegisterPageComponent implements OnInit {
  rigisterobj: reigsterObj;
  constructor(private ajaxServe: AjaxServeService) {
    this.rigisterobj = new reigsterObj();
  }

  ngOnInit() {
  }
  register() {
    this.ajaxServe.register(this.rigisterobj).then((data) => {
      console.log(data);
    });
  }

}
