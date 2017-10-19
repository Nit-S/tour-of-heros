import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    hero: Hero;
    heroes: Hero[];
    constructor(private heroService: HeroService){
    }
    getHeroes(): void{
        this.heroService.getHeroes().then(heroes=>this.heroes= heroes.slice(1,5));
    }
    ngOnInit(){
        this.getHeroes();
    }
}