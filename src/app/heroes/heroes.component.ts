import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero'
import{ HEROES } from '../mock-heroes'; 
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  //A Class instantiation 
  //selectedHero: Hero;
  heroes: Hero[];
  
  //onSelect(hero: Hero): void {
    //this.selectedHero = hero;
    //this.messageService.add("Hero Clicked " + this.selectedHero.name);
  //}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        /** 
         * a little representation here
         * 
         * 
         * getHeroesSubscribe(heroes){
         * this.heroes = heroes;
         * }
         * 
        */
  }


 

  constructor(private heroService: HeroService, public messageService: MessageService) { }

  ngOnInit() {

    this.getHeroes();
    
  }

}
