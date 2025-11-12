import { Component } from '@angular/core';
import { FileMgt } from '@fe/file-mgt';

@Component({
  selector: 'lib-files-page',
  imports: [
    FileMgt
  ],
  templateUrl: './files-page.html',
  styleUrl: './files-page.scss',
})
export class FilesPage {}
