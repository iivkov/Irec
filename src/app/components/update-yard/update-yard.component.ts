import { Component, OnInit } from '@angular/core';
import { YardService } from 'src/app/services/yard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Yard } from 'src/app/interfaces/yard';

@Component({
  selector: 'app-update-yard',
  templateUrl: './update-yard.component.html',
  styleUrls: ['./update-yard.component.css']
})
export class UpdateYardComponent implements OnInit {
  currentYard: Yard = {};
  // message = '';

  constructor(private yardService: YardService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      // this.message = '';
      this.getYard(this.route.snapshot.params["id"]);
  }

  getYard(id: string): void {
    this.yardService.get(id)
      .subscribe({
        next: (data) => {
          this.currentYard = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateYard(): void {
    // this.message = '';
    this.yardService.update(this.currentYard.id, this.currentYard)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.message = res.message ? res.message : 'This yard was updated successfully!';
          this.router.navigate(['/yards']);
        },
        error: (e) => console.error(e)
      });
  }
}