// Modèle d'image pour le store image-mgt
export interface Image {
  id: string;
  url: string;
  title?: string;
  description?: string;
  isPublic?: boolean;
  isCarousel?: boolean;
  [key: string]: unknown;
}
