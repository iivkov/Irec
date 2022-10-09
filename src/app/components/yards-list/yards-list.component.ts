import { Component, OnInit } from '@angular/core';
import { Yard } from 'src/app/interfaces/yard';
import { YardService } from 'src/app/services/yard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yards-list',
  templateUrl: './yards-list.component.html',
  styleUrls: ['./yards-list.component.css']
})
export class YardsListComponent implements OnInit {
  yards?: Yard[];
  
  constructor(private yardService: YardService, private router: Router) { }
  
  ngOnInit(): void {
    this.retrieveYards();
  }
  
  retrieveYards(): void {
    this.yardService.getAll()
      .subscribe({
        next: (data) => {
          this.yards = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // refreshList(): void {
  //   this.retrieveYards();
  // }

  removeAllYards(): void {
    this.yardService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.refreshList();
          this.retrieveYards();
        },
        error: (e) => console.error(e)
      });
  }

  deleteYard(id: any) {
    this.yardService.delete(id)
      .subscribe({
      next: (res) => {
        console.log(res);
        // this.refreshList();
        this.retrieveYards();
      },
      error: (e) => console.error(e)
    });
  }

  showUpdateYard(id: any){
    this.router.navigate(['updateYard', id]);
  }

  showYardDetails(id: any){
    this.router.navigate(['yardDetails', id]);
  }

}
