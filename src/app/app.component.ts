import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'constr-sw-p3-frontend';
}
export type building = {
  id: number;
  name: string;
  capacity: number;
  floors: number;
  description: string;
};
