import { Component, OnInit } from '@angular/core';
import { ClouthausComponent } from './clouthaus/clouthaus.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ClouthausComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
}