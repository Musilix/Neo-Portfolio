import { Component, OnInit } from '@angular/core';
import { CodingStatsService } from '../coding-stats.service';
import { Stat } from "../stat";

@Component({
  selector: 'app-about-page',
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

  private stats;
  public languagesUsed;
  public dailyAvgTime;
  public totalTime = "...";

  public bestDayDate;
  public bestDay = "...";

  public topLangs : Stat[] = [];

  constructor(private statsService: CodingStatsService) { }

  normalize(val, topLangs) { 
    let min = topLangs[0]["percent"];
    let max = topLangs[2]["percent"];

    return Math.round(((val - min) / (max - min)) * 100); 
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
      for(let i = 0; i < 3; i++){
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
          'background': statStates[i]
        });
      }
    });
  }
}
