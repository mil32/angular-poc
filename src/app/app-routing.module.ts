import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/list/list.component";
import { AddComponent } from "./components/add/add.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "list", component: ListComponent },
  { path: "add", component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
