import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  {
    path: 'parent',
    component: ParentComponentComponent,
  },

  {
    path: 'child',
    component: ChildComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
