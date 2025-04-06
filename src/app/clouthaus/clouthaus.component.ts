import { Component, OnInit } from '@angular/core';
import { ClouthausService } from '../services/clouthaus.service';
import { ApiResponse, ClouthausData } from '../models/clouthaus.model';
import {NgFor} from '@angular/common';
import {NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clouthaus',
  imports: [NgFor, NgIf,CommonModule],
  templateUrl: './clouthaus.component.html',
  styleUrls: ['clouthaus.component.css'],
})

export class ClouthausComponent implements OnInit {
  clouthausData: ClouthausData | undefined;
  loading: boolean =  true;
  error: string | null = null;

  constructor(private ClouthausService: ClouthausService){console.log('Constructor called');}

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.loadData();
  }

  loadData(): void{
    this.loading = true;
    this.ClouthausService.getClouthausDataFromFile()
      .subscribe({
        next: (response: ApiResponse) => {
          if (response.response === 'SUCCESS') {
            this.clouthausData = response.content;
            console.log('success');
          }
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error loading data: ' + err.message;
          this.loading = false;
        }
      });
  }
}

