import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  max-width: 150px;
  overflow: visible;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  text-align: justify;

  &:hover {
    opacity: 0.9;
  }
`;

export const StyledPopover = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 95px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 10px 5px 0;
    border-color: transparent white transparent transparent;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
  padding: 5px;
`;

export const StyledContent = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  min-width: 170px;
  min-height: 80px;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
  word-wrap: break-word;
`;
