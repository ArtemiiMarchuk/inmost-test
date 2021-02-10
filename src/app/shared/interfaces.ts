export interface AlbumInterface {
  img: string;
  name: string;
  artistName: string;
  id: string;
  liked?: boolean;
}

export type AlertType = 'like' | 'dislike';

export interface AlertInterface {
  type: AlertType;
  message: string;
}
