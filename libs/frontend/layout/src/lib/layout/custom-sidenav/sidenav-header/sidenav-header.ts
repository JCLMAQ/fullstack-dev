import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'lib-sidenav-header',
  imports: [],
  templateUrl: './sidenav-header.html',
  styleUrl: './sidenav-header.scss',
})
export class SidenavHeader {

  collapsed = input(false);

  profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));


}
