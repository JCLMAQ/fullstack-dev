import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-layout',
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {}
