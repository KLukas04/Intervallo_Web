import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Intervallo_Web';

  constructor(private router: Router) { }

  hasRoute(route: string) {
    console.log(route)
    console.log(this.router.url)
    console.log(this.router.url === route)
    return this.router.url === route;
  }

}

