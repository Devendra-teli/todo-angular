import { Routes } from '@angular/router';
import { AllTaskComponent } from './component/pages/all-task/all-task.component';
import { ImportantComponent } from './component/pages/important/important.component';
import { CompletedComponent } from './component/pages/completed/completed.component';

export const routes: Routes = [
    {path:"",component: AllTaskComponent},
    {path:"important",component:ImportantComponent},
    {path:"completed",component:CompletedComponent}
];
