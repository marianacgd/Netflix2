import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() { 
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
    
    // this.iniciarDados();
  }

  // iniciarDados(){
  //   this.myForm.patchValue({
  //     email:'yan.m.esteves@gmail.com'
  //   })
  //}

  onSubmit(){
    if (!this.myForm.valid){
      alert('Usuário ou Senha inválidos!')
      return;
    }
    console.log(this.myForm.value);
  }

}
