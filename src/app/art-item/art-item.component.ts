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

  ngOnInit(): void {}

  closeProj(){
    this.artService.closeProj();
  }

  //jank... but easy... way to close art item if clicked outside...
  @HostListener('click', ['$event'])
  clickOutside(e) {
    let clickableAreas = ["art-bio-img", "art-img-exit-wrap", "art-bio-detail-wrap", "bio-bottom-lip-wrap", "art-bio-header", "art-bio-desc"]
    if(!clickableAreas.includes(e.target.className)){
      this.closeProj();
    }
  }
}
