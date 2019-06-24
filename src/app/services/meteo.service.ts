import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  meteos:any=[
    {name:'Dakar',temp:53},
    {name:'Thies',temp:53},
    {name:'Diourbel',temp:53},
  ]
getMEteos(){
 return this.meteos
}

public getOnName(name){
  let meteo=null;
  this.meteos.forEach(met => {
    if(met.name === name ){
      meteo = met; 
    }
  });
  return meteo;
}

public getOnNameL(name){
  let meteo=null;
  this.meteos.forEach(met => {
    if(met.name === name ){
      meteo = met; 
    }
  });
  return meteo;
}
  constructor() { }
}
