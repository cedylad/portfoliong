import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetsServices } from '../services/projets.services';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit{

  projets!: Projet[];

  constructor(private projetsService: ProjetsServices) { }

  ngOnInit(): void {
    this.projets = this.projetsService.getAllProjets();
  }
}
