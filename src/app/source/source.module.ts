import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {SourceComponent} from "./source/source.component";



@NgModule({
  declarations: [
    SourceComponent
  ],
  exports: [
    SourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule,
  ]
})
export class SourceModule { }
