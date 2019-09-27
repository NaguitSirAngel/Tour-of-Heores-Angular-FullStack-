import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 //A Class instantiation
  
 hero: Hero = {
    id :  1,
    name: "Windstorm"
  }

  constructor() { }

  ngOnInit() {
    
  }

}
