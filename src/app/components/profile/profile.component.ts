import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser?: User;

  public totalSolvents=0;
  public totalAcids=0;
  public totalPesticides=0;
  public totalMetals=0;
  public totalPaper=0;
  public totalTextile=0;
  public totalBatteries=0;
  public totalTires=0;
  public totalGlass=0;
  public totalPlastic=0;    
  public value : any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.findsum(this.currentUser?.recyclings);
  }

  findsum(data : any){ 
    this.value=data    
    console.log(this.value);  
    for(let j=0;j<data.length;j++){   
      this.totalSolvents+= this.value[j].solvents  
      this.totalAcids+= this.value[j].acids
      this.totalPesticides+= this.value[j].pesticides  
      this.totalMetals+= this.value[j].metals  
      this.totalPaper+= this.value[j].paper  
      this.totalTextile+= this.value[j].textile
      this.totalBatteries+= this.value[j].batteries
      this.totalTires+= this.value[j].tires
      this.totalGlass+= this.value[j].glass      
      this.totalPlastic+= this.value[j].plastic  
        //  console.log(this.totalPlastic)  
    }  
  }  

}
