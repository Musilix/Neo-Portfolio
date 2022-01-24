import { Component, OnInit } from '@angular/core';
import { CodingStatsService } from '../coding-stats.service';
import { Stat } from "../stat";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-about-page',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ 
          width: "0%",
          background: '#747fe0'
        }),
        animate('1s ease-out', style({ 
          width: '{{statWidth}}',
          background: '{{statBackground}}' 
        })),
      ]),
    ]),
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  private days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  public dayComments = {
    "Monday": "That's different!",
    "Tuesday": "Tuesday was the real start of my week!",
    "Wednesday": "I was feeling that midweek motivation!",
    "Thursday": "The sight of Friday must of got me going!",
    "Friday": "Must of been a bug...",
    "Saturday": "Why wasn't I relaxing?!",
    "Sunday": "One last hoorah for the week!"
  };

  public statBarStyles = [];

  private statsTemplate;
  private codingIDEs = ["VS Code", "IntelliJ"]

  private stats;
  public iterAmt;

  public editors;

  public languagesUsed;
  public dailyAvgTime;
  public totalTime = ".";

  public bestDayDate;
  public bestDay = ".";

  public topLangs : Stat[] = [];
  public topLangLength = 4;

  private pendingStatsInterval = setInterval(() => {this.waitForStats()}, 250);
  
  constructor(private statsService: CodingStatsService) { }

  normalize(val, topLangs) { 
    let min = topLangs[this.iterAmt-1]["percent"];
    let max = topLangs[0]["percent"];

    return Math.round(((val - min) / (max - min)) * 100); 
  }

  getStatStyles(i, template){
    this.statsTemplate = template;
    return this.statBarStyles[this.topLangLength - 1 - i];
  }

  getToplangLen(){
    return this.topLangLength;
  }

  //called by ngfor elements, which generate time stamps for each row of data on prog langs used for the week
  timeCheck(hrs, mins){
    if(parseInt(hrs) <= 0 && parseInt(mins) <= 0){
      return '';
    }else{
      let hrsTxt : String = this.timeStatEnglish(hrs, "hours");
      let minsTxt : String = this.timeStatEnglish(mins, "minutes");
      let consolidatedTxt = '';

      if(hrsTxt.length > 0 && minsTxt.length <= 0){
        consolidatedTxt = `${hrsTxt}`;
      }else if(hrsTxt.length <= 0 && minsTxt.length > 0){
        consolidatedTxt = `${minsTxt}`;
      }else if(hrsTxt.length > 0 && minsTxt.length > 0){
        consolidatedTxt = `${hrsTxt} and ${minsTxt}`;
      }else if(hrsTxt.length <= 0 && minsTxt.length <= 0){
        consolidatedTxt = ``;
      }

      return consolidatedTxt;
    }
  }

  timeStatEnglish(timeAmt, timeUnit){
    let timeTxt : String = '';

    //could use enum, but am I rlly gonna be that xtra?
    if(timeUnit == "hours"){
      if(parseInt(timeAmt) == 1){
        return `${timeAmt} hour`;
      }else if(parseInt(timeAmt) > 1){
        return `${timeAmt} hours`;
      }else{
        return timeTxt;
      }
    }else if(timeUnit == "minutes"){
      if(parseInt(timeAmt) == 1){
        return `${timeAmt} min`;
      }else if(parseInt(timeAmt) > 1){
        return `${timeAmt} mins`;
      }else{
        return timeTxt;
      }
    }
  }

  getStatTint(i){
    let base = [39, 57, 214]; //r, g, b
    let len = this.topLangLength;

    let rt = base[0] + (.5 * 1/(((len - 1) - i)+1) * (255 - base[0]))
    let gt = base[1] + (.5 * 1/(((len - 1) - i)+1)  * (255 - base[1]))
    let bt = base[2] + (.5 * 1/(((len - 1) - i)+1)  * (255 - base[2]))

    let newBase = [rt, gt, bt];

    return `rgb(${newBase[0]}, ${newBase[1]}, ${newBase[2]})`;
  }

  waitForStats(){
    if(this.totalTime.length < 3){
      this.totalTime += ".";
      this.bestDay += ".";
    }else{
      this.totalTime = ".";
      this.bestDay = ".";
    }
  }

  ngOnInit(): void {
    this.statsService.getMyStats().subscribe((data) => {
      clearInterval(this.pendingStatsInterval);
      this.stats = data["data"];

      this.languagesUsed = this.stats["languages"];
      this.dailyAvgTime = this.stats["human_readable_daily_average"];
      this.totalTime =  this.stats["human_readable_total_including_other_language"];

      this.bestDayDate = this.stats["best_day"]["date"];
      this.bestDay = this.days[new Date(this.bestDayDate).getUTCDay()];

      this.editors = this.stats["editors"];

      this.iterAmt = (this.languagesUsed.length >= this.topLangLength) ? this.topLangLength : this.languagesUsed.length;
      //get top 3 languages used this week

      for(let i = 0; i < this.iterAmt; i++){
        let langStat : Stat = {
          lang: this.languagesUsed[i]["name"],
          hrs: this.languagesUsed[i]["hours"],
          mins: this.languagesUsed[i]["minutes"],
          percent: parseInt(this.languagesUsed[i]["percent"])
        }

        //check if we have an "other" category of languages
        if(langStat.lang === "Other"){
          //check if more than 1 editor was used
          if(this.editors.length > 1){
            //loop thru used editors and check to see if one of them WASNT a coding IDE. aka Blender/video editing software/etc
            for(let i = 0; i < this.editors.length; i++){
              if(!this.codingIDEs.includes(this.editors[i].name)){
                langStat.lang = this.editors[i].name;
              }
            }
          }
        }
        this.topLangs.push(langStat);
      }

      //set style objects for each of the top 3 langs
      //currently, creating these objs and serving them to ngStyle to dynamically style sta bars, but it doesnt seem there is any binding on ngStyle
      //so fill statBarStyles, and call
      for(let i = this.topLangs.length - 1; i >= 0; i--){
        this.statBarStyles.push({
          'width': `${this.normalize(this.topLangs[i]['percent'], this.topLangs)}%`,
          'background': this.getStatTint(i)
        });
      }
    });
  }

  ngAfterViewInit(): void{
  }
}
