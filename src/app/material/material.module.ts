import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";

const importExportList = [
  MatToolbarModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...importExportList,
    CommonModule
  ],
  exports: [
    ...importExportList,
  ]
})
export class MaterialModule {
}
