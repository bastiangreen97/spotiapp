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
      Authorization:'Bearer BQB9H6RoSlYAbYkuiShUSSwt5Jkd8MXwX6sH-Tk6B7owQjHIcoLpPgCc6r1phS2MEp8ocJTvVriHLfvsLIY'
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
}
