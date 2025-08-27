import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'lib-busy',
  imports: [MatProgressSpinnerModule],
  templateUrl: './busy.html',
  styleUrl: './busy.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Busy {}
