import { Component, OnInit } from "@angular/core";
import { Application } from "@splinetool/runtime";

@Component({
  selector: "app-splash-page",
  templateUrl: "./splash-page.component.html",
  styleUrls: ["./splash-page.component.css"],
})
export class SplashPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/2POZdu2KYCCM3-Ke/scene.splinecode");

    // const destroySplineWatermarkSorry = () => {
    //   const watermarks = [
    //     document.getElementById("spline-watermark"),
    //     document.getElementById("logo"),
    //   ];
    //   for (let watermark of watermarks) {
    //     watermark.style.display = "none";
    //   }
    // };
    // setTimeout(destroySplineWatermarkSorry, 1000);
  }
}
