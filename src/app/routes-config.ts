import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routesConfig:Routes = [
    { path : '', redirectTo: 'home', pathMatch : 'full'},
    { path : 'home', component : HomeComponent},
    { path : 'bar', component : BarChartComponent },
    { path : 'pie', component : PieChartComponent },
    { path : 'line', component : LineChartComponent }
];