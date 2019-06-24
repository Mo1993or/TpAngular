import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { FormBuilder,FormControl } from '@angular/forms';
import { MeteoService } from 'src/app/services/meteo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent implements OnInit {
  
titre='Titre';
logi=''
psw='';
logii='';
pass='';
Er='';

changertitre(value:string){
  this.titre=value;
}

 
  details: any;
  
  
 
  constructor(private router: Router,private activeRoute:ActivatedRoute,private meteo:MeteoService) {
    this.activeRoute.paramMap.subscribe(param => {
      let name=param.get("name");
      this.details=this.meteo.getOnName(name);
    })
    
   }
   getFormulaires(value:string,pws:string){
    
    this.logi=value;
    this.psw=pws;
    if(this.logi === 'smb' && this.psw === '123'){
    
    this.router.navigate(['/listeMeteo'])
  }else{
    this.Er='login ou password incorrect!';
  }
   }

  
  ngOnInit() {
    
  }
}


