import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent{
  loading: boolean;
  artista: any = {};
  tracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;
    this.activatedRoute.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtist(id: string){
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
        this.artista = artist;
        this.loading = false;
      })
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
      .subscribe((tracks: any) => {
         this.tracks = tracks;
         console.log(this.tracks);
      })
  }

}
