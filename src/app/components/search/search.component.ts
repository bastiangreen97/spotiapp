import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  artistas: any[] = [];
  loading: boolean = false;

  constructor( private spotifyService: SpotifyService ) {
  }

  buscar(termino: string){
    this.loading = true;
    this.spotifyService.getArtists(termino)
        .subscribe( (data: any) => {
          this.artistas = data;
          this.loading = false;
        });
  }
}
