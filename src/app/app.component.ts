import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }
}

const HEROES: Hero[] = [
  new Hero(1, 'war machine'),
    new Hero(2, 'iron man'),
     new Hero(3, 'loda lussan'),
      new Hero(4, 'pudina ram'),
       new Hero(5, 'ravi kishan'),
        new Hero(6, 'mulchand sharma'),
         new Hero(7, 'dengu mal'),
          new Hero(8, 'gandu ram'),
           new Hero(9, 'chutiya'),
            new Hero(10, 'randi')
             ];



@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>

    <ul>
     <li *ngFor="let hero of heroes" 
     (click) = onSelect(hero)>
     <span class="badge">{{hero.id}}</span> {{hero.name}}
     </li>
    </ul>
    
    <h2>{{selectedHero.name}} details!</h2>

    <div *ngIf="selectedHero">
    <div>
      <label>id: </label> 
      <input [(ngModel)]="selectedHero.id" placeholder="ID">
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="NAME">
    </div>
    </div>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[] = HEROES;

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}



