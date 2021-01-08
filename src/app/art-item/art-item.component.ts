import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css']
})
export class ArtItemComponent implements OnInit {
  @Input() artObj;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.artObj);
  }

}
