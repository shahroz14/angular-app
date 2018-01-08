import { Component, OnInit , Input} from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from '../hero.service';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input()
  hero : Hero;
  term : string = 'Adele';
  //loading : boolean = false;
  
  constructor( private searchService: SearchService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    //this.loading = this.searchService.loading;
    console.log(this.term +' searched');
    //this.searchService.search(this.term).then( () => this.loading = false);
    this.searchService.searchOb(this.term);
    
  }

}
