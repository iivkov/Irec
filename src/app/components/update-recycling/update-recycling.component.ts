import { Component, OnInit } from '@angular/core';
import { RecyclingService } from 'src/app/services/recycling.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recycling } from 'src/app/interfaces/recycling'; 

@Component({
  selector: 'app-update-recycling',
  templateUrl: './update-recycling.component.html',
  styleUrls: ['./update-recycling.component.css']
})
export class UpdateRecyclingComponent implements OnInit {

  currentRecycling: Recycling = {};
  // message = '';

  constructor(private recyclingService: RecyclingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      // this.message = '';
      this.getRecycling(this.route.snapshot.params["id"]);
  }

  getRecycling(id: string): void {
    this.recyclingService.get(id)
      .subscribe({
        next: (data) => {
          this.currentRecycling = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateRecycling(): void {
    // this.message = '';
    this.recyclingService.update(this.currentRecycling.id, this.currentRecycling)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.message = res.message ? res.message : 'This yard was updated successfully!';
          this.router.navigate(['/recyclings']);
        },
        error: (e) => console.error(e)
      });
  }

}
