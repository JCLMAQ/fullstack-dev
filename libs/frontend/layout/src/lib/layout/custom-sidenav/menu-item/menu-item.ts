import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-menu-item',
  imports: [],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItem {}
