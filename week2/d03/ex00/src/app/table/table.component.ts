import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  val : any;
  ngOnInit():void
  {
    let xhr = new XMLHttpRequest();
    let temp = this;
    xhr.open("GET", "https://fakestoreapi.com/products", true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200)
      {
        temp.val = JSON.parse(this.responseText);
        console.log(temp.val)
      }
    }
    xhr.send();
  }
}
