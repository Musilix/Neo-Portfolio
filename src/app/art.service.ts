import { Injectable } from "@angular/core";
import { Art } from "./art.js";
interface Art {
  title: string;
  medium: string;
  img: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class ArtService {
  private artPieces: Art[] = Art.data;
  private currArt: HTMLElement = null;

  displayProj(idx) {
    let artBioTemplate = document.getElementById("art-bio-" + idx);

    // if we find an existing art item with a name coinciding with the idx sent in,
    // then we should set its display on and tune the opacity so it fades in!
    if (artBioTemplate) {
      artBioTemplate.style.display = "flex";
      setTimeout(() => {
        artBioTemplate.style.opacity = "1";
        this.currArt = artBioTemplate;
      }, 100);
    }
  }

  closeProj() {
    if (this.currArt) {
      this.currArt.style.opacity = "0";
      setTimeout(() => {
        this.currArt.style.display = "none";
        this.currArt = null;
      }, 100);
    }
  }

  getArt() {
    return this.artPieces;
  }
}
