import { Component, signal } from '@angular/core';
import { GamerProfile } from "../../../gamer-profile/pages/gamer-profile/gamer-profile";
import { Shop } from "../../../shop/pages/shop/shop";
import { Tasks } from "../../../tasks/pages/tasks/tasks";

@Component({
  selector: 'layout',
  imports: [GamerProfile, Shop, Tasks],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  section = signal('misiones')

  changeSection(section: string){
    this.section.update((sectionName) =>
      sectionName = section
     )
  }
}


