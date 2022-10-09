import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-recyclings',
  templateUrl: './user-recyclings.component.html',
  styleUrls: ['./user-recyclings.component.css']
})
export class UserRecyclingsComponent implements OnInit {

  currentUser?: User;
  constructor(private storageService: StorageService) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

}
