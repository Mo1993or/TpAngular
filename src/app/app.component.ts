import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
isAuth=false;
appareils=[
{
	name: 'Machine a laver',
	status:'éteint'
},
{
	name: 'Frigo',
	status:'allumé'
},
{
	name: 'Ordinateur',
	status:'éteint'
}
];
constructor(){}
}
function warnUser(): void{
	console.log("kjdscbh");
} 