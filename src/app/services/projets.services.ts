import { Injectable } from "@angular/core";
import { Projet } from "../models/projet.model";

@Injectable({
    providedIn: 'root'
})

export class ProjetsServices{
    projets: Projet[] = [
        {
            id: 1,
            titleProjet: 'Projet 1',
            imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            descriptionProjet: 'Desription projet 1',
            optionnalProjet: 'En attente',
        },
        {
            id: 2,
            titleProjet: 'Projet 2',
            imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            descriptionProjet: 'Desription projet 2',
        },
        {
            id: 3,
            titleProjet: 'Projet 3',
            imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            descriptionProjet: 'Desription projet 3',
        },
        {
            id: 4,
            titleProjet: 'Projet 1',
            imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            descriptionProjet: 'Desription projet 1',
            optionnalProjet: 'En attente',
        },
        {
            id: 5,
            titleProjet: 'Projet 2',
            imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            descriptionProjet: 'Desription projet 2',
        },
        {
            id: 6,
            titleProjet: 'Projet 3',
            imgProjet: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            descriptionProjet: 'Desription projet 3',
        },
      ];

      getAllProjets(): Projet[]{
        return this.projets;
      }

      getProjetById(projetId: number): Projet {
        const projet =  this.projets.find(projet => projet.id === projetId);
        if (!projet) {
            throw new Error('Projet not found!');
        } else {
            return projet;
        }
      }
}