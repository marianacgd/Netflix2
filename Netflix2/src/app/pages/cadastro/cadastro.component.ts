import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  FormCadastro!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() { 
    this.FormCadastro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
    
    //  this.iniciarEmail();
  }

  // iniciarEmail(){
  //   this.FormCadastro.patchValue({
  //     email:''
  //   })
  // }

  onSubmit(){
    if (!this.FormCadastro.valid){
      alert('Falha ao enviar formulário!')
      return;
    }
    console.log(this.FormCadastro.value);
  }

}
