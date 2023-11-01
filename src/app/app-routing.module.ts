import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjetListComponent } from "./projet-list/projet-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleProjetComponent } from "./single-projet/single-projet.component";

const routes: Routes = [
    { path: 'projets/:id', component: SingleProjetComponent },
    { path: 'projets', component: ProjetListComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}