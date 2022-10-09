import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Irec';
  private roles: string[] = [];
  isLoggedIn = false;
  showRecyclerContent = false;
  showConsumerContent = false;
  email?: string;
  constructor(private storageService: StorageService, private authService: AuthService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showRecyclerContent = this.roles.includes('RAZINA_RECYCLER');
      this.showConsumerContent = this.roles.includes('RAZINA_CONSUMER');
      this.email = user.email;
    }
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
      },
      error: err => {
        console.log(err);
      }
    });
    
    window.location.reload();
  }
}
