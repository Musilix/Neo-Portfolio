import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { SplashThreeSectionService } from '../splash-three-section.service';

@Component({
  selector: 'app-splash-three-section',
  templateUrl: './splash-three-section.component.html',
  styleUrls: ['./splash-three-section.component.css']
})
export class SplashThreeSectionComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private threeService: SplashThreeSectionService){}

  ngOnInit(){
    this.threeService.createScene(this.rendererCanvas);
    this.threeService.animate();
  }
}
