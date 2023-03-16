import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  FormHome!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() { 
    this.FormHome = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  onSubmit(){
    if (!this.FormHome.valid){
      alert('Email inválido!')
      return;
    }
    console.log(this.FormHome.value);
    const storage = window.localStorage;
    storage.setItem("email", this.FormHome.value.email);
  }

}
