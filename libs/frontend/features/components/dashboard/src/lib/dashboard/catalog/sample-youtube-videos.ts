export type SampleVideo = {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      standard: {
        url: string;
      };
    };
  };
};

const SAMPLE_VIDEO_DETAILS: Record<
  string,
  Pick<SampleVideo['snippet'], 'title' | 'description' | 'publishedAt'>
> = {
  Irf4aZC3LPY: {
    title: 'Building a Modern Angular Dashboard',
    description:
      'Explore the layout system, widget catalog, and customization options in this dashboard template.',
    publishedAt: '2025-03-12T09:30:00Z',
  },
  MtTAfjiZxtk: {
    title: 'Customizing Dashboard Widgets',
    description:
      'Learn how to add, resize, reposition, and remove widgets on the dashboard grid.',
    publishedAt: '2025-02-04T14:15:00Z',
  },
  I13uAoOGU_4: {
    title: 'Angular Material 3 Theming Walkthrough',
    description:
      'See how the dashboard uses Material Design 3 tokens, Tailwind utilities, and custom themes.',
    publishedAt: '2025-01-18T11:00:00Z',
  },
  plQJIgD2rl8: {
    title: 'Nested Sidebar Navigation Patterns',
    description:
      'Review the nested sidebar layout and lazy-loaded routes used throughout the app.',
    publishedAt: '2024-12-08T16:45:00Z',
  },
  vHNeAqgNM4o: {
    title: 'Signal Stores in Angular Dashboards',
    description:
      'Understand how dashboard state is split between view and persistence layers.',
    publishedAt: '2024-11-21T08:20:00Z',
  },
  'h6-BhzFD1CM': {
    title: 'Demo Mode Without Firebase',
    description:
      'Run the dashboard locally with prefilled demo credentials and browser-only persistence.',
    publishedAt: '2024-10-03T13:10:00Z',
  },
};

export function youtubeThumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function buildSampleVideos(videoIds: readonly string[]): SampleVideo[] {
  return videoIds.map((id) => {
    const details = SAMPLE_VIDEO_DETAILS[id] ?? {
      title: 'Sample video',
      description: 'Replace this entry with your own video metadata.',
      publishedAt: '2025-01-01T00:00:00Z',
    };

    return {
      id,
      snippet: {
        ...details,
        thumbnails: {
          standard: { url: youtubeThumbnailUrl(id) },
        },
      },
    };
  });
}
