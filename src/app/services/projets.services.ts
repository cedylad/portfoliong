import { Injectable } from '@angular/core';
import { Projet } from '../models/projet.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetsServices {
  projets: Projet[] = [
    {
      id: 1,
      titleProjet: 'Générateur de mots de passes',
      imgProjet: '/assets/projets/passwordgenerator.mov',
      descriptionProjet: 'Extension de générateur pour mot de passe',
    },
    {
      id: 2,
      titleProjet: 'HuberEat',
      imgProjet: '/assets/projets/hubereat.mov',
      descriptionProjet:
        "HubertEat est un site web construit en utilisant PHP selon le modèle MVC. Il s'agit d'une plateforme de commande de nourriture. Ce projet a été développé dans le cadre d'un examen.",
      githubProjet: 'https://github.com/cedylad/HubertEat',
    },
  ];

  getAllProjets(): Projet[] {
    return this.projets;
  }

  getProjetById(projetId: number): Projet {
    const projet = this.projets.find((projet) => projet.id === projetId);
    if (!projet) {
      throw new Error('Projet not found!');
    } else {
      return projet;
    }
  }
}
