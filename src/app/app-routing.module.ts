import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceDetailComponent } from './space-detail/space-detail.component';
import { SpaceListComponent } from './space-list/space-list.component';



const routes: Routes = [
  { path: '', component: SpaceListComponent },
  { path: 'details', component: SpaceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
