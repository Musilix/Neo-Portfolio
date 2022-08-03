import { Component, OnInit, HostListener } from '@angular/core';
import { ArtService } from '../art.service';

@Component({
  selector: 'app-extras-page',
  templateUrl: './extras-page.component.html',
  styleUrls: ['./extras-page.component.css']
})
export class ExtrasPageComponent implements OnInit {
  // complicated way
  private idxToTabMappings = {0: "endeavours", 1: "art", 2: "hobbies"};
  private tabToIdxMappings = {"endeavours": 0, "art": 1, "hobbies": 2};

  public activeTabIdx = 0;

  private tabsToListenTo: HTMLElement[] = [];
  private scrollRef: HTMLElement = document.getElementsByTagName("body")[0];

  private buttonPressed: boolean = false;
  private scrollListener;

  private scrollTimeout;
  
  constructor(private artService: ArtService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // set up tabsToWatch... we will loop thru this list of tabs whenever the user scrolls and check to see which ele is in view
    // seems like a pretty... bad way to check for this, but seeing as there is only 3 tabs to check each time, should be fine for now...
    for(let i = 0; i < Object.keys(this.idxToTabMappings).length; i++){
      this.tabsToListenTo.push(document.getElementById(this.idxToTabMappings[i]));
    }

    // modularize scroll logic so we can easily use it or pause it with the event listeners.
    this.scrollListener = () => {
      //if the button was pressed, we should pause the logic for tab finding... and simply just call the function which intiailizes our timeout for determing when the buttonPress scroll has stopped
      if(this.buttonPressed){
        this.checkIfEnded();
      }else{
        //loop thru the tab elements, get their bounding box, and then implement logic to determine if the tab is in the window/document viewport
        for(let i = 0; i < this.tabsToListenTo.length; i++){
          let currItem = this.tabsToListenTo[i].getBoundingClientRect();

          // logic to check if a tab/section is in the viewport, give or take 20px for the nav bar on top...
          // although, I know that nav bar is NOT 20px... so -\(._.)/-
          if(Math.floor(currItem.top) >= 0 && Math.floor(currItem.bottom) <= (window.innerHeight)){
            this.activeTabIdx = this.tabToIdxMappings[this.idxToTabMappings[i]];

            //awful awful way to try and handle when sections have a height
          //larger than the window inner height...
          }
        }
      }
    }

    // initialization of event listener on component init
    this.scrollRef.addEventListener("scroll", this.scrollListener);
  }

  /* this function will be called if the buttonPressed bool has been set to true(which should only happen on explicit click of a side tab button)
   it will set a timeout each time, which will come to be overrided if the window is still scrolling... if the window is no longer scrolling, the timeout function
   will have time to execute, where it will be able to set buttonPressed bool to false
  */
  checkIfEnded(){
    if(this.scrollTimeout){
      clearTimeout(this.scrollTimeout);
    }

    /* HOLY FUCKING FUCK, IT TOOK ME 2 DAYS TO REALIZE THAT THE REASON
       THIS TIMEOUT CALLBACK FUNCTION WASNT UPDATING THE GLOBAL SCOPED "BUTTONPRESSED"
       VAL WAS BCUZ THE LEXICAL SCOPE WAS COMPLETELY DIFFERENT WHEN NOT USING
       AND ANON FUNCTION AS THE CALLBACK... WOW... lesson learned I guess
    */
    this.scrollTimeout = setTimeout(() => {
        this.buttonPressed = false;
    }, 100);
  }

  // function for scrolling to specific section, depending on idx given + mapping value
  scrollTo(sectionIdx){  
    this.activeTabIdx = sectionIdx;
    this.buttonPressed = true;

    let scrollToEle : HTMLElement = document.getElementById(this.idxToTabMappings[this.activeTabIdx]);

    scrollToEle.scrollIntoView({behavior: "smooth", block: "start"});
  }

  // TODO: move this from teh extras component into the svc that manages art...
  // the art svc, that is!
  displayArt(idx){
    console.log(`Trying to show ${idx}`);
    this.artService.displayProj(idx);
  }

  getArt(){
    return this.artService.getArt();
  }

  hideThatShit(element : HTMLElement){
    element.style.width = "20%";
    element.style.order = "1";
  }

  expandThatShit(element : HTMLElement){
    element.style.width = "0%";
    element.style.order = "3";


    setTimeout( () => {
      element.style.width = "100%";

    }, 500);
  }

  // move to hobby component
  handleHobby(event){
    let ele : HTMLElement = event.path[1]; // evidently, this is what holds the element that was clicked, in the case of these hobby elements
    let hobbyElements = Array.from(document.getElementsByClassName("hobby-item"));

    for(let i = 0; i < hobbyElements.length; i++){
      if(hobbyElements[i] != ele){
        this.hideThatShit(<HTMLElement> hobbyElements[i]);
      }else{
        this.expandThatShit(ele);
      }
    }
  }
}