import { IAssetsVideo } from './IAssetsVideo';

export interface IVideoData {
  id: string;
  title: string;
  sinopse: string;
  classification_indicative: number;
  episodes: number;
  views: number;
  seasons: number | null;
  time: string | null;
  type: string;
  year: number;
  updated_at: Date;
  created_at: Date;
  assets: IAssetsVideo;
}
