import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { YouTubePlayer } from '@angular/youtube-player';
import {
  buildSampleVideos,
  SampleVideo,
} from '../sample-youtube-videos';

@Component({
  selector: 'lib-published-videos',
  imports: [YouTubePlayer, DatePipe, MatButtonModule],
  template: `
    @for (video of videos(); track video.id) {
      <div class="flex gap-6 mb-3">
        @defer (on interaction) {
          <youtube-player
            [playerVars]="{ autoplay: 1 }"
            [width]="100"
            [height]="50"
            [videoId]="video.id"
          />
        } @placeholder {
          <div class="cursor-pointer">
            <img
              class="min-w-[100px] h-[50px] rounded-2xl object-cover"
              [src]="video.snippet.thumbnails.standard.url"
              [alt]="video.snippet.title"
            />
          </div>
        }
        <div>
          <h4 class="text-sm">{{ video.snippet.title }}</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300">
            {{ video.snippet.publishedAt | date }}
          </p>
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
      margin-top: 32px;
    }

    youtube-player ::ng-deep .youtube-player-placeholder {
      border-radius: 16px;
    }
  `,
})
export class PublishedVideosComponent {
  readonly videoIds = ['Irf4aZC3LPY', 'MtTAfjiZxtk', 'I13uAoOGU_4'] as const;

  videos = signal<SampleVideo[]>([]);

  ngOnInit(): void {
    this.videos.set(buildSampleVideos(this.videoIds));
  }
}
