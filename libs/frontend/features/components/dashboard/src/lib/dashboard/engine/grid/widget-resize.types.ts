export type ResizeAxis = 'horizontal' | 'vertical';

export type LayoutMode = 'desktop' | 'mobile';

export type DashboardGridMetrics = {
  containerWidth: number;
  availableColumns: number;
  columnWidth: number;
  columnStep: number;
  rowStep: number;
  rowTrackPx: number;
  layoutMode: LayoutMode;
};

export type ResizePreview = {
  axis: ResizeAxis;
  continuousExtentPx: number;
  snappedSpan: number;
};

export type ResizePreviewState = {
  axis: ResizeAxis;
  continuousExtentPx: number;
  snappedSpan: number;
};
