import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-top-bar',
  template: `
    <mat-toolbar color="primary">Image Gallery</mat-toolbar>
  `,
  styles: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule
  ]
})
export class TopBarComponent {}
