import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UIRouter } from '@uirouter/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,private route:UIRouter) {}

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginFormGroup = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }
  onSubmit(formData) {
    console.log(formData.value);
    if(formData.value.Username=="test"&&formData.value.Password=="test")
    {
      this.route.urlService.url('/order');
    }
  }
}
