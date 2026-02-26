import { Component } from '@angular/core';
import { TagStore } from '../store/tag-store';
import { TagTable } from '../tag-table/tag-table';

@Component({
  selector: 'lib-tag',
  imports: [TagTable],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  providers: [TagStore],
})
export class Tag {}
