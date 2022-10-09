import { Component, OnInit } from '@angular/core';
import { YardService } from 'src/app/services/yard.service';
import { ActivatedRoute } from '@angular/router';
import { Yard } from 'src/app/interfaces/yard';

@Component({
  selector: 'app-yard-details',
  templateUrl: './yard-details.component.html',
  styleUrls: ['./yard-details.component.css']
})
export class YardDetailsComponent implements OnInit {
  currentYard: Yard = {};

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
  
  constructor(private yardService: YardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getYard(this.route.snapshot.params["id"]);
  }
  
  getYard(id: string): void {
    this.yardService.get(id)
      .subscribe({
        next: (data) => {
          this.currentYard = data;
          this.findsum(this.currentYard.recyclings);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
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