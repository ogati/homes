import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
