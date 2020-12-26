import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent{
  @Input() items: any[] = [];
  constructor(private router: Router) { }

  verArtista(item: any){

    let artistaId;

    if( item.type === 'artist' ){
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId]);
    console.log(artistaId);

  }

}
