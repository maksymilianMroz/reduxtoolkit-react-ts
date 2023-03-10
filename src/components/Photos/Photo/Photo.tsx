// Można by było w sumie przenieść Photos do folderu np. features i w folderze components trzymać tylko jakieś pomniejsze inputy, buttony, kontenery. A z kolei folder features mógłby trzymać już większe konstrukcje takie jak np. Photos, ale już darowałem sobie część planowaniem idealnej struktury.
import { PhotoType } from "../store/types";
import { useState } from "react";
import {
  Container,
  StyledButton,
  StyledCloseButton,
  StyledContent,
  StyledPopover,
} from "./Photo.styles";
import { Loader } from "../../Loader/Loader.styles";

type PhotoTypes = {
  photo: PhotoType;
};

export const Photo = ({ photo }: PhotoTypes) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPopoverOpen(true);
  };

  const handleClose = () => {
    setIsPopoverOpen(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <StyledButton onClick={handleClick}>
        <img
          src={photo.thumbnailUrl}
          alt={photo.title}
          onLoad={handleImageLoad}
        />
        <p>{photo.title}</p>
      </StyledButton>
      {/* Można by było wydzielić popover do osobnego komponentu, i nie zajmować się całą logikę jego działania w tym komponencie, ale z braku czasu zostawiam tak :)  */}
      {isPopoverOpen && (
        <StyledPopover>
          <StyledCloseButton onClick={handleClose}>x</StyledCloseButton>
          <StyledContent>
            <span>
              <b>album id:</b> {photo.albumId}
            </span>
            <span>
              <b>title:</b> {photo.title}
            </span>
            <span>
              <b>url:</b> {photo.url}
            </span>
            <span>
              <b>thumbnailUrl:</b> {photo.thumbnailUrl}
            </span>
          </StyledContent>
        </StyledPopover>
      )}
    </Container>
  );
};
