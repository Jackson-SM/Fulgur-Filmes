import { IAssetsVideo } from './IAssetsVideo';

export interface IVideoData {
  id: number;
  title: string;
  sinopse: string;
  classificationIndicative: number;
  episodes: number;
  views: number;
  seanons: number | null;
  time: string | null;
  type: string;
  year: number;
  updated_at: Date;
  created_at: Date;
  assets: IAssetsVideo;
}
