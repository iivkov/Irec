import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser: User = {};

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
  
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params["id"]);
  }
  
  getUser(id: string): void {
    this.userService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data;
          this.findsum(this.currentUser.recyclings);
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
