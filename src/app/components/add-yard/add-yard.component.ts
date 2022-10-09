import { Component, OnInit } from '@angular/core';
import { Yard } from 'src/app/interfaces/yard';
import { YardService } from 'src/app/services/yard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-yard',
  templateUrl: './add-yard.component.html',
  styleUrls: ['./add-yard.component.css']
})
export class AddYardComponent implements OnInit {
  yard: Yard = {};
  submitted = false;

  constructor(private yardService: YardService, private router: Router) { }

  ngOnInit(): void {
  }

  saveYard(): void {
    const data = {
      name: this.yard.name,
      address: this.yard.address,
      phone: this.yard.phone,
      website: this.yard.website
    };
    this.yardService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.router.navigate(['yards']);
        },
        error: (e) => console.error(e)
      });
  }
  
  // newYard(): void {
  //   this.submitted = false;
  //   this.yard = { };
  // }

}
