import { Component, OnInit } from '@angular/core';
import { RecyclingService } from 'src/app/services/recycling.service';
import { ActivatedRoute } from '@angular/router';
import { Recycling } from 'src/app/interfaces/recycling';

@Component({
  selector: 'app-recycling-details',
  templateUrl: './recycling-details.component.html',
  styleUrls: ['./recycling-details.component.css']
})
export class RecyclingDetailsComponent implements OnInit {

  currentRecycling: Recycling = {};
  
  constructor(private recyclingService: RecyclingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
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

}
