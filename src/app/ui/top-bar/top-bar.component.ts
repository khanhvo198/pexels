import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <mat-toolbar color="primary">Image Gallery</mat-toolbar>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {}
