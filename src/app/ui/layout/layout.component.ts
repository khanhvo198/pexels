import { Component } from '@angular/core';
@Component({
  selector: 'app-layout',
  template: `
    <mat-sidenav-container class="layout-container">
      <mat-sidenav mode="side" [opened]="true">
        <app-side-nav></app-side-nav>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-top-bar></app-top-bar>
        <div class="layout-content-container">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
