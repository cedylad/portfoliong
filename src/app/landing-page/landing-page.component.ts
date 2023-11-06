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
      y: 30,
      repeat: -1,
      yoyo: true,
    });

    //Bouton "hi"
    gsap.from('.hi', {
      duration: 2,
      x: 500,
    });
  }

  onContinue(): void {
    this.router.navigateByUrl('projets');
  }
}
