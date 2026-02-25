import { Component } from '@angular/core';
import { TagTable } from '../tag-table/tag-table';

@Component({
  selector: 'lib-tag',
  imports: [TagTable],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {}
