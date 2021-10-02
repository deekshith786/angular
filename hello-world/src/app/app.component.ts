import { Component } from '@angular/core';


//Component decorator
@Component({
  // metaData
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome Nezuko';
}
