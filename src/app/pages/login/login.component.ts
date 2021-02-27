import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  usuario : UsuarioModel = new UsuarioModel();




  constructor() { }

  ngOnInit() {
  }

  login( form: NgForm ){

    // si es cierto q es invalid se sale
    if(form.invalid) {return}




    console.log("Imprinir Si el form es valido");
    console.log(  form );
    console.log(  this.usuario );
    
    
    


   }


}
