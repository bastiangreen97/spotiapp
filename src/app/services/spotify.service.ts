import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'; //rjxs extensions
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) { }
  
  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:'Bearer QAxwTBMzmlLTe9HIWSSZZk1O-YtceWhUdPNLiHe7Z2etV9vCvGMhWnhHNyU_5ByWetkikFidAXI8dXtxbM'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => {
        return data['albums'].items;
      }));
  }

  getArtists(artist: string){
    return this.getQuery(`search?q=${artist}+&type=artist`)
      .pipe(map (( data: any) => {
        return data['artists'].items;
      }));      
  }

  getArtist(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map ((data: any) => {
        return data['tracks'];
      }))
  }
}
