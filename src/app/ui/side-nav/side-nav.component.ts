import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  template: `
    <mat-nav-list>
      <mat-list-item><b>Image Gallery</b></mat-list-item>
      <a mat-list-item routerLink="/" routerLinkActive="active">Home</a>
      <a mat-list-item routerLink="random" routerLinkActive="active">Random</a>
    </mat-nav-list>
  `,
  styles: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatListModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class SideNavComponent {}
