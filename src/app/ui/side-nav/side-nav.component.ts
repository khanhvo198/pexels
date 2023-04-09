import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {}
