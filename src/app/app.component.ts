import { Component, OnInit } from '@angular/core';
import { Projet } from './models/projet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projets!: Projet[];
  
  ngOnInit() {
    this.projets = [
      {
        titleProjet: 'Projet 1',
        imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descriptionProjet: 'Desription projet 1',
        optionnalProjet: 'En attente',
      },
      {
        titleProjet: 'Projet 2',
        imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descriptionProjet: 'Desription projet 2',
      },
      {
        titleProjet: 'Projet 3',
        imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descriptionProjet: 'Desription projet 3',
      },
      {
        titleProjet: 'Projet 1',
        imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descriptionProjet: 'Desription projet 1',
        optionnalProjet: 'En attente',
      },
      {
        titleProjet: 'Projet 2',
        imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descriptionProjet: 'Desription projet 2',
      },
      {
        titleProjet: 'Projet 3',
        imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descriptionProjet: 'Desription projet 3',
      },
    ];
  }
}
