import { Component, OnInit } from '@angular/core';
import { Recycling } from 'src/app/interfaces/recycling';
import { RecyclingService } from 'src/app/services/recycling.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recycling',
  templateUrl: './add-recycling.component.html',
  styleUrls: ['./add-recycling.component.css']
})
export class AddRecyclingComponent implements OnInit {
  recycling: Recycling = {};
  submitted = false;

  constructor(private recyclingService: RecyclingService, private router: Router) { }

  ngOnInit(): void {
  }

  saveRecycling(): void {
    const data = {
      solvents: this.recycling.solvents, 
      acids: this.recycling.acids,
      pesticides: this.recycling.pesticides, 
      metals: this.recycling.metals, 
      paper: this.recycling.paper, 
      textile: this.recycling.textile, 
      batteries: this.recycling.batteries, 
      tires: this.recycling.tires, 
      glass: this.recycling.glass, 
      plastic: this.recycling.plastic,
      yardId: this.recycling.yardId,
      userId: this.recycling.userId
    };
    this.recyclingService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['recyclings']);
        },
        error: (e) => console.error(e)
      });
  }
  
  // newRecycling(): void {
  //   this.submitted = false;
  //   this.recycling = { };
  // }

}
