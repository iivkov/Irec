import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-consumer-panel',
  templateUrl: './consumer-panel.component.html',
  styleUrls: ['./consumer-panel.component.css']
})
export class ConsumerPanelComponent implements OnInit {
  // content?: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    // this.userService.getConsumerPanel().subscribe({
    //   next: data => {
    //     this.content = data;
    //   },
    //   error: err => {console.log(err)
    //     if (err.error) {
    //       this.content = JSON.parse(err.error).message;
    //     } else {
    //       this.content = "Error with status: " + err.status;
    //     }
    //   }
    // });
  }

}
