import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'app-liste-meteo',
  templateUrl: './liste-meteo.component.html',
  styleUrls: ['./liste-meteo.component.css']
})
export class ListeMeteoComponent implements OnInit {
meteos;
  constructor(private meteo: MeteoService ) {
    this.meteos=this.meteo.getMEteos();
   }

  ngOnInit() {
  }

}
