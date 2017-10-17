"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n\n    <ul>\n     <li *ngFor=\"let hero of heroes\" \n     (click) = onSelect(hero)>\n     <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n     </li>\n    </ul>\n    \n    <h2>{{selectedHero.name}} details!</h2>\n\n    <div *ngIf=\"selectedHero\">\n    <div>\n      <label>id: </label> \n      <input [(ngModel)]=\"selectedHero.id\" placeholder=\"ID\">\n    </div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"selectedHero.name\" placeholder=\"NAME\">\n    </div>\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map