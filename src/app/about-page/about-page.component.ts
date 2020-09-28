import { Component, OnInit } from '@angular/core';
import { CodingStatsService } from '../coding-stats.service';

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

  private stats;
  public languagesUsed;
  public dailyAvgTime;
  public totalTime = "...";

  public bestDayDate;
  public bestDay = "...";

  constructor(private statsService: CodingStatsService) { }

  ngOnInit(): void {
    this.statsService.getMyStats().subscribe((data) => {
      this.stats = data["data"];
      this.languagesUsed = this.stats["languages"];
      this.dailyAvgTime = this.stats["human_readable_daily_average"];
      this.totalTime =  this.stats["human_readable_total"];

      this.bestDayDate = this.stats["best_day"]["date"];
      this.bestDay = this.days[new Date(this.bestDayDate).getDay()];

      // console.log(this.stats);
      // console.log(this.languagesUsed);
      // console.log("Daily avg: " + this.dailyAvgTime);
      // console.log("Total Time: " + this.totalTime);
      // console.log("best day: " + this.days[this.bestDay]);
    });
  }

}
