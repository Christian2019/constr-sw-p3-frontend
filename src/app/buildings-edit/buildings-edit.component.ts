import { Component, OnInit } from '@angular/core';
import { building } from '../app.component';

@Component({
  selector: 'app-buildings-edit',
  templateUrl: './buildings-edit.component.html',
  styleUrls: ['./buildings-edit.component.css'],
})
export class BuildingsEditComponent implements OnInit {
  building = {
    id: 0,
    name: '',
    capacity: 0,
    floors: 0,
    description: '',
  };
  constructor() {
    this.building.id = 0;
    this.building.name = '';
    this.building.capacity = 0;
    this.building.floors = 0;
    this.building.description = '';
  }

  ngOnInit(): void {}
  changeName(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.name = element.value;
  }

  changeCapacity(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.capacity = +element.value;
  }
  changeFloors(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.floors = +element.value;
  }
  changeDescription(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.description = element.value;
  }
  clickButton() {
    console.log(this.building);
  }
}
