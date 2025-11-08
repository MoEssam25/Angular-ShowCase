import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from '../../Components/categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }