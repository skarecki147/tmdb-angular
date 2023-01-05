import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

const importExportList = [
  MatButtonModule,
  MatToolbarModule,
  MatRippleModule,
  MatCardModule,
  MatSelectModule,
  MatChipsModule,
  MatIconModule
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
