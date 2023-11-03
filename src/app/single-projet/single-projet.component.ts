import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetsServices } from '../services/projets.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-projet',
  templateUrl: './single-projet.component.html',
  styleUrls: ['./single-projet.component.scss']
})
export class SingleProjetComponent {
  projet!: Projet;

  constructor(private projetsService: ProjetsServices, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const projetId = +this.route.snapshot.params['id'];
    this.projet = this.projetsService.getProjetById(projetId);
  }
}
