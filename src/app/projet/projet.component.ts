import { Component, OnInit, Input } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetsServices } from '../services/projets.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
  @Input() projet!: Projet;

  constructor(private projetsService: ProjetsServices, 
              private router: Router) { }

  ngOnInit(): void {
      
  }

  onViewProjet() {
    this.router.navigateByUrl(`projets/${this.projet.id}`);
  }
}
