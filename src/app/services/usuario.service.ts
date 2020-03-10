import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { map, switchMap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private db: AngularFirestore) { 
    
  }

  addUsuario(usuario: UsuarioInterface) {
    firebase.database().ref('usuarios/' + usuario.codigo).set(usuario);
  }

  getUsuario(codigo: string) {
    return firebase.database().ref('/usuarios/' + codigo).once('value').then(function(snapshot) {
    return snapshot.val()
    });
  }
}
