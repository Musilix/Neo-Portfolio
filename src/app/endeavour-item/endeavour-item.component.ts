import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endeavour-item',
  templateUrl: './endeavour-item.component.html',
  styleUrls: ['./endeavour-item.component.css']
})
export class EndeavourItemComponent implements OnInit {

  @Output() nav = new EventEmitter<number>();

  @Input() endObj;
  @Input() endeavourLen: number;
  @Input() displayEnd: boolean;

  private currEnd;
  public canReadMore: boolean = false;

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

  hasLeftEnd(){
    if(this.endeavourLen > 0){
      if(parseInt(this.endObj.index) - 1 >= 0){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  hasRightEnd(){
    if(this.endeavourLen > 0){
      if(parseInt(this.endObj.index) + 1 <= this.endeavourLen - 1){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  //possibly move this to endeavours svc
  displayEndeavour(index){
    let idx = parseInt(index);
    let item = document.getElementById("end-" + (idx+1) + "-more");

    this.canReadMore = true;

    // if(item){
    //   item.style.display = "flex";
    //   setTimeout(() => {
    //     item.style.opacity = "1";
    //     this.currEnd = item;
    //   }, 100);
    // }
  }

  closeCurrEndeavour(){

    this.canReadMore = false;

    // if(this.currEnd){
    //   this.currEnd.style.opacity = "0";
    //   setTimeout(() => {
    //     this.currEnd.style.display = "none";
    //     this.currEnd = null;
    //   }, 100);
    // }
  }
}
