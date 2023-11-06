import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    //Bouton décovurir "mes projets"
    gsap.from('.btn-discover', {
      duration: 1,
      y: 50, // Déplacez l'élément vers le haut de 100 pixels
      opacity: 1, // Faites apparaître l'élément progressivement
      //ease: 'elastic', // Utilisez l'effet de rebondissement
      repeat: -1,
      yoyo: true,
    });

    //Compétences
  }

  onContinue(): void {
    this.router.navigateByUrl('projets');
  }
}
