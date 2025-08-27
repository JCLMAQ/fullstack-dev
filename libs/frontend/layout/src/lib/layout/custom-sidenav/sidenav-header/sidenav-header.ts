import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-sidenav-header',
  imports: [],
  templateUrl: './sidenav-header.html',
  styleUrl: './sidenav-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavHeader {}
