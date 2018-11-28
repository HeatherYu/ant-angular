import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule} from '../../common/shared/shared.module';
import { HighlightDirective } from '../../highlight.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SetupComponent , HighlightDirective]
})
export class SetupModule { }
