import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css']
})
export class ArtItemComponent implements OnInit {
  @Input() artObj;

  constructor(private artService: ArtService, private eRef: ElementRef) { }

  ngOnInit(): void {
    // console.log(this.artObj);
  }

  closeProj(){
    this.artService.closeProj();
  }

  //jank... but easy... way to close art item if clicked outside...
  @HostListener('click', ['$event'])
  clickOutside(e) {
    if(e.target.className === "art-bio-detail-wrap"){
      this.closeProj();
    }
  }
}
