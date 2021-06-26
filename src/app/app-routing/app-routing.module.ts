import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { BuildingsEditComponent } from '../buildings-edit/buildings-edit.component';
import { RoomEditComponent } from '../room-edit/room-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'building/edit', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'building/edit', component: BuildingsEditComponent },
      { path: 'room/edit', component: RoomEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
