import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero'
import{ HEROES } from '../mock-heroes'; 
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  //A Class instantiation 
  selectedHero: Hero;
  heroes: Hero[];
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        /** 
         * getHeroesSubscribe(heroes){
         * this.heroes = heroes;
         * }
         * 
        */
  }


 

  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getHeroes();
    
  }

}
