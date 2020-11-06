import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Karaoque';
  initialized: boolean;


  constructor(private router: Router) {
    // this.initialized should be retrieved from store here
  }

  ngOnInit(): void {
    // check if has address and password, redirect to /status else redirect to /home
    if (this.initialized) {
      this.router.navigate(['/status']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
