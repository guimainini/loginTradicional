import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;


  constructor() { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();

    //this.usuario.email = 'guimainini@gmail.com'
   }

   onSubmit( form: NgForm ){

    // si es cierto q es invalid se sale
    if(form.invalid) {return}




    console.log("Envie el formulario");
    console.log(this.usuario);
    console.log(form);
    
    
    


   }


}
