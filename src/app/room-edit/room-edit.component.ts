import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css'],
})
export class RoomEditComponent implements OnInit {
  room = {
    id: 0,
    BuildingID: 0,
    Number: 0,
    Description: '',
    MaxCapacity: 0,
    Type: '',
  };
  constructor() {
    this.room.id = 0;
    this.room.BuildingID = 0;
    this.room.Number = 0;
    this.room.Description = '';
    this.room.MaxCapacity = 0;
    this.room.Type = '';
  }

  ngOnInit(): void {}

  changeNumber(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.room.Number = +element.value;
  }
  changeBuilding(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.room.BuildingID = +element.value;
  }
  changeCapacity(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.room.MaxCapacity = +element.value;
  }
  changeType(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.room.Type = element.value;
  }

  clickButton() {
    console.log(this.room);
  }
}
