import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 'templates/heroes.component.html',
  styleUrls: ['templates/css/heroStyles.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit  {
  // The heroService parameter identifies as a HeroService injection site
  constructor(
    private heroService: HeroService, 
    private router: Router
  ) { } //cunstructor that injects the HeroService and router

  heroes: Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;
  
  // supplies the heroes variable with heroes from the HeroService
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  
  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
    .then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) { this.selectedHero = null; }
    })
  }
  
    
}

