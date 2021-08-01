import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentColor: string = 'red';
  size: number = 100;
  arr: string[] = new Array(this.size);

ngOnInit() {
  let history = localStorage.getItem(this.size.toString());
  if(history) {
    this.arr = history.split(',');
    console.log('oninit', this.arr);
    
  }
}

  onOptionChange(event: any) {
    let history = localStorage.getItem(event.target.value);
    if(history) {
      console.log(history);
      this.arr = history.split(',');
      console.log(this.arr);
    } else {
      this.size = Number.parseInt(event.target.value);
      this.arr = new Array(this.size);
    }
  }

  fill (index: number) {
    this.arr[index] = this.currentColor;
  }

  reset() {
    localStorage.clear();
    this.arr = new Array(this.size);
  }

  save() {
    localStorage.setItem(this.size.toString(), this.arr.toString());
  }
}
