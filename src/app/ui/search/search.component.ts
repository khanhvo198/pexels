import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  template: `
    <mat-form-field appearance="fill">
      <input matInput placeholder="Search..." [formControl]="queryControl" />
      <button
        *ngIf="queryControl.value"
        matSuffix
        mat-icon-button
        aria-label="Clear"
        (click)="queryControl.reset()"
      >
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  `,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  queryControl = new FormControl('');

  constructor() {}
  @Input() defaultQuery: string = 'nature';
  @Output() query = this.queryControl.valueChanges.pipe(debounceTime(250));

  ngOnInit() {
    this.defaultQuery = this.defaultQuery ? this.defaultQuery : 'nature';
    this.queryControl.setValue(this.defaultQuery, { emitEvent: false });
  }
}
