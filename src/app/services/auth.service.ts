import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBXl7l3h92e5uDFnuBJ9xCDmiYqAoALlb4';

  //Crear nuevo usarui
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient ) { }

  logoout () {

  }

  login ( usuario : UsuarioModel ) {

  }

  newUser( usuario : UsuarioModel ) {

  }


}
