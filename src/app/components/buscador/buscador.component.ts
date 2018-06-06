import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';  //Heroe clase
import { Router } from '@angular/router';
import { Heroe } from '../../models/heroe.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService,
              private router:Router,
              private activatedRoute:ActivatedRoute,){
      console.log("constructor buscador");

      this.activatedRoute.params.subscribe( params =>{

      this.heroes = this._heroesService.buscarHeroes( params['textoBuscar'] );

    })
  }

  ngOnInit() {
     //this.heroes = this._heroesService.getHeroes();
     console.log( this.heroes );
  }

  openHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
