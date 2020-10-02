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

  private stats;
  public languagesUsed;
  public dailyAvgTime;
  public totalTime = "...";

  public bestDayDate;
  public bestDay = "...";

  public topLangs : Stat[] = [];
  public topLangLength = 4;

  constructor(private statsService: CodingStatsService) { }

  normalize(val, topLangs) { 
    let min = topLangs[0]["percent"];
    let max = topLangs[this.topLangLength-1]["percent"];

    return Math.round(((val - min) / (max - min)) * 100); 
  }

  getStatStyles(i, template){
    this.statsTemplate = template;
    return this.statBarStyles[this.topLangLength - 1 - i];
  }

  getToplangLen(){
    return this.topLangLength;
  }

  timeCheck(hrs, mins){
    if(parseInt(hrs) <= 0 && parseInt(mins) <=0){
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

    let rt = base[0] + (.5 * 1/(i+1) * (255 - base[0]))
    let gt = base[1] + (.5 * 1/(i+1)  * (255 - base[1]))
    let bt = base[2] + (.5 * 1/(i+1)  * (255 - base[2]))

    let newBase = [rt, gt, bt];

    return `rgb(${newBase[0]}, ${newBase[1]}, ${newBase[2]})`;
  }

  ngOnInit(): void {
    this.statsService.getMyStats().subscribe((data) => {
      this.stats = data["data"];
      this.languagesUsed = this.stats["languages"];
      this.dailyAvgTime = this.stats["human_readable_daily_average"];
      this.totalTime =  this.stats["human_readable_total"];

      this.bestDayDate = this.stats["best_day"]["date"];
      this.bestDay = this.days[new Date(this.bestDayDate).getDay()];

      //get top 3 languages used this week
      for(let i = 0; i < this.topLangLength; i++){
        let langStat : Stat = {
          lang: this.languagesUsed[i]["name"],
          hrs: this.languagesUsed[i]["hours"],
          mins: this.languagesUsed[i]["minutes"],
          percent: parseInt(this.languagesUsed[i]["percent"])
        }
        this.topLangs.push(langStat);
      }

      //set style objects for each of the top 3 langs
      //currently, creating these objs and serving them to ngStyle to dynamically style sta bars, but it doesnt seem there is any binding on ngStyle
      //so fill statBarStyles, and call
      let statStates = ["#8f9afc", "#747fe0 ", "#48519b "]
      for(let i = 0; i < this.topLangs.length; i++){
        this.statBarStyles.push({
          'width': `${this.normalize(this.topLangs[i]['percent'], this.topLangs)}%`,
          'background': this.getStatTint(i)
        });
      }

      console.log(this.statBarStyles);
      console.log(this.statBarStyles[0]["width"]);
    });
  }

  ngAfterViewInit(): void{

    // console.log(codingStats);
  }
}
