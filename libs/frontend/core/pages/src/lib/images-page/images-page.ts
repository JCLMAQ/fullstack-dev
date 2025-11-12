import { Component } from '@angular/core';
import { ImageMgt } from '@fe/image-mgt';

@Component({
  selector: 'lib-images-page',
  imports: [
    ImageMgt
  ],
  templateUrl: './images-page.html',
  styleUrl: './images-page.scss',
})
export class ImagesPage {}
