import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { fetchPhotos } from "./components/Photos/store/photosSlice";
import PhotosList from "./components/Photos/Photos";
import { StyledInput } from "./components/Input/Input.styles";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = useSelector((state: RootState) => {
    if (searchQuery) {
      return {
        data: state.photos.data.filter((photo) =>
          photo.title.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        isLoading: state.photos.isLoading,
        error: state.photos.error,
      };
    } else {
      return state.photos;
    }
  });

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (isLoading) {
    return <p>LOADING...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Photos</h1>
      <StyledInput
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <PhotosList photos={data} />
    </div>
  );
};

export default App;
