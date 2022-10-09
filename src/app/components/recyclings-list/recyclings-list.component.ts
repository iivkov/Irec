import { Component, OnInit } from '@angular/core';
import { Recycling } from 'src/app/interfaces/recycling';
import { RecyclingService } from 'src/app/services/recycling.service'; 
import { Router } from '@angular/router';
import { YardService } from 'src/app/services/yard.service';
import { Yard } from 'src/app/interfaces/yard';

@Component({
  selector: 'app-recyclings-list',
  templateUrl: './recyclings-list.component.html',
  styleUrls: ['./recyclings-list.component.css']
})
export class RecyclingsListComponent implements OnInit {
  recyclings?: Recycling[];
  // yards?: Yard[];

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
  
  constructor(private recyclingService: RecyclingService, private router: Router, private yardService: YardService) { }
  
  ngOnInit(): void {
    // this.retrieveYards();
    this.retrieveRecyclings();
  }
  
  retrieveRecyclings(): void {
    this.recyclingService.getAll()
      .subscribe({
        next: (data) => {
          this.recyclings = data;
          this.findsum(this.recyclings);
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

  // retrieveYards(): void {
  //   this.yardService.getAll()
  //     .subscribe({
  //       next: (data) => {
  //         this.yards = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // refreshList(): void {
  //   this.retrieveRecyclings();
  // }

  removeAllRecyclings(): void {
    this.recyclingService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.refreshList();
          this.retrieveRecyclings();
        },
        error: (e) => console.error(e)
      });
  }

  deleteRecycling(id: any) {
    this.recyclingService.delete(id)
      .subscribe({
      next: (res) => {
        console.log(res);
        // this.refreshList();
        this.retrieveRecyclings();
      },
      error: (e) => console.error(e)
    });
  }

  showUpdateRecycling(id: any){
    this.router.navigate(['updateRecycling', id]);
  }

  showRecyclingDetails(id: any){
    this.router.navigate(['recyclingDetails', id]);
  }

}
