export type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosState = {
  data: PhotoType[];
  isLoading: boolean;
  error: string | null;
};
