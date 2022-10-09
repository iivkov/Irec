import { Component, OnInit } from '@angular/core';
import { WasteItem } from 'src/app/interfaces/waste-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-waste-items',
  templateUrl: './waste-items.component.html',
  styleUrls: ['./waste-items.component.css']
})
export class WasteItemsComponent implements OnInit {

  searchTerm = '';

  wasteItems: WasteItem[] = [];
  allWasteItems: WasteItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<WasteItem[]>('./assets/data/waste-items.json')
      .subscribe((data: WasteItem[]) => {
        this.wasteItems = data;
        this.allWasteItems = this.wasteItems;
      });
  }

  search(value: string): void {
    this.wasteItems = this.allWasteItems.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }

}
