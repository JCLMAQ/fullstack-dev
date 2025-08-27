import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-header',
  imports: [],
  templateUrl: './sidenav-header.html',
  styleUrl: './sidenav-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
