import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjetListComponent } from "./projet-list/projet-list.component";

const routes: Routes = [
    { path: 'projets', component: ProjetListComponent }
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