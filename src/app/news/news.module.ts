import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsComponent } from "./news.component";

const routes: Routes = [
    {
        path: '',
        component: NewsComponent
    }
]
@NgModule({
    declarations: [NewsComponent],
    imports: [RouterModule.forChild(routes)]
})
export class NewsModule {

}