import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../@shared/services/data.service';
import { PokemonDetailbyID, PokemonMoves, PokemonStats } from '../../../@shared/typed';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  // value: number;
  bufferValue: number = 75;

  pokemonDetails: any = {};
  resultmove = new Array<PokemonMoves>();
  resultstat = new Array<PokemonStats>();
  enableView = false;
  isLoading = false;

  constructor(private dataService: DataService, private router: Router, private activatedRouter: ActivatedRoute) {
    // url params
    this.activatedRouter.params.subscribe(params => this.getPokemondetail(params['id']));
  }

  ngOnInit(): void {
  }

  getPokemondetail(id: number) {
      this.isLoading = true;
      this.dataService.getPokemons(id).subscribe((response: any) => { 
        this.pokemonDetails = (new PokemonDetailbyID( 
          response.name,
          response.id,
          response.sprites,
          response.dream_world,
          response.types,
          response.moves,
          response.stats,
          response.height,
          response.weight,
          response.order,
          response.base_experience
        ));
        this.enableView = true;
        this.isLoading = false;
        this.getMoves(this.pokemonDetails);
        this.getStats(this.pokemonDetails);
      },
      err => {
        this.isLoading = false;
        this.enableView = false;
        console.log('In Error Block---', err._body + ' ' + err.status);
      }
    )
  }

  getMoves(data: any) {
    data.moves.forEach((responsemove: any) => {
      this.dataService.getPokeMoves(responsemove.move.url).subscribe((movesResponse: any) => {
        this.resultmove.push(new PokemonMoves( 
          movesResponse.name,
          movesResponse.type,
          movesResponse.accuracy)
        );
      },
      err => console.log('In Error Block---', err._body + ' ' + err.status));
    });
  }

  getStats(data: any) {
    data.stats.forEach((responsestat: any) => {
      this.dataService.getPokeStats(responsestat.stat.url).subscribe((statsResponse: any) => {
        this.resultstat.push(new PokemonStats( 
          statsResponse.name,
          statsResponse.id,
          statsResponse.game_index)
        );
      },
      err => console.log('In Error Block---', err._body + ' ' + err.status));
    });
  }
}
