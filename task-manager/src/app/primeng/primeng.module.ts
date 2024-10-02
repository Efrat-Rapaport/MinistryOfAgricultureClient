import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ייבוא של BrowserAnimationsModule


@NgModule({
  declarations: [],
  imports: [
    CommonModule, BrowserAnimationsModule, InputTextareaModule, ButtonModule, CalendarModule, TableModule, InputTextModule, DropdownModule, CheckboxModule, FormsModule
  ],
  exports: [ButtonModule, BrowserAnimationsModule, InputTextareaModule, CalendarModule, TableModule, InputTextModule, DropdownModule, CheckboxModule, FormsModule]
})
export class PrimengModule { }
