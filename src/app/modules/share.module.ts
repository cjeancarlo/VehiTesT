import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieAnimationViewModule } from 'ng-lottie';
import { MatIconModule, MatSelectModule, MatDialogModule, MatListModule, MatInputModule,
         MatGridListModule, MatAutocompleteModule, MatCheckboxModule, MatCardModule,
         MatButtonModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    LottieAnimationViewModule.forRoot(),
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    LottieAnimationViewModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ]
})
export class ShareModule { }
