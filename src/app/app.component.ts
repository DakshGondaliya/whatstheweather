import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary"> <span>What's The Weather</span> </mat-toolbar>
    <div fxLayoutAlign="center">
      <div class="mat-caption vertical-margin">Your city's forecast, right now!</div>
    </div>
    <div class="container">
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>
    <mat-card>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
      <!-- <app-city-search-tpldriven></app-city-search-tpldriven> -->
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
        <mat-card-header>
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content> <app-current-weather></app-current-weather> </mat-card-content>
      <div fxFlex></div>
    </div>
    </mat-card>

    </div>
  `,
})
export class AppComponent { }
