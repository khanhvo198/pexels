import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  template: `
    <mat-form-field appearance="fill">
      <input matInput placeholder="Search..." [formControl]="queryControl">
      <button *ngIf="queryControl.value" matSuffix mat-icon-button aria-label="Clear" (click)="queryControl.reset()">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  queryControl = new FormControl('')
}
