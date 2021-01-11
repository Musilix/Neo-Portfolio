import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endeavour-item',
  templateUrl: './endeavour-item.component.html',
  styleUrls: ['./endeavour-item.component.css']
})
export class EndeavourItemComponent implements OnInit {

  @Output() nav = new EventEmitter<number>();
  @Input() endObj;

  private currEnd;
  constructor() { }

  ngOnInit(): void {
  }

  handleRightNavClick(){
    let currIdx = parseInt(this.endObj.index);
    this.nav.emit(++currIdx);
  }

  handleLeftNavClick(){
    let currIdx = parseInt(this.endObj.index);
    this.nav.emit(--currIdx);
  }

  //possibly move this to endeavours svc
  displayEndeavour(index){
    let idx = parseInt(index);
    let item = document.getElementById("end-" + (idx+1) + "-more");

    if(item){
      item.style.display = "flex";
      setTimeout(() => {
        item.style.opacity = "1";
        this.currEnd = item;
      }, 100);
    }
  }

  closeCurrEndeavour(){
    if(this.currEnd){
      this.currEnd.style.opacity = "0";
      setTimeout(() => {
        this.currEnd.style.display = "none";
        this.currEnd = null;
      }, 100);
    }
  }
}
