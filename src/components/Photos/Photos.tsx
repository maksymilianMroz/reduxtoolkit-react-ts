import { PhotoType } from "./store/types";
import { List } from "./Photos.styles";
import { Photo } from "./Photo/Photo";

type PhotosListProps = {
  photos: PhotoType[];
};

const PhotosList = ({ photos }: PhotosListProps) => {
  return (
    <List>
      {photos.map((photo) => (
        <Photo photo={photo} key={photo.id} />
      ))}
    </List>
  );
};

export default PhotosList;
