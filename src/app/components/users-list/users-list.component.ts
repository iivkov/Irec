import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users?: User[];
  
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.retrieveUsers();
  }
  
  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // refreshList(): void {
  //   this.retrieveUsers();
  // }


  showUserDetails(id: any){
    this.router.navigate(['userDetails', id]);
  }

}
