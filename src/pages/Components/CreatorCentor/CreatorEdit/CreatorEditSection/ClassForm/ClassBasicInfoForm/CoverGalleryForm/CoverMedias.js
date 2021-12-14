import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Button } from '../../../../../share/Button';
import { Icon } from '../../../../../share/Icon';
import CoverMediaUpLoadBox from './CoverUpLoadBox';

import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const CoverMedias = ({ coverGallery, register }) => {
  const [coverMediaArray, setCoverMediaArray] = useState([1, 2, 3]);

  const handleAddCoverMedia = () => {
    setCoverMediaArray(prev => {
      const newArray = [...prev];
      newArray.push(prev[prev.length - 1] + 1);
      return newArray;
    });
  };

  // const handleInputClick = () => {
  //   mediaRef.current.click();
  // };

  const handleDragEnd = ({ draggableId, destination, source }) => {
    if (!destination) return;
    setCoverMediaArray(prev => {
      const newCoverMediaArray = [...prev];
      newCoverMediaArray.splice(source.index, 1);
      newCoverMediaArray.splice(destination?.index, 0, draggableId);
      return newCoverMediaArray;
    });
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <CoverMediaContainer>
          <Droppable droppableId="first">
            {provided => (
              <CoverUpLoadList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {coverMediaArray?.map((id, index) => (
                  <Draggable draggableId={id} index={index} key={id}>
                    {provided => (
                      <CoverUpLoadItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={id}
                      >
                        <BoxContainer>
                          <Input
                            {...register(`classMediaImage${index}`)}
                            type="file"
                            accept="image/*"
                          ></Input>
                        </BoxContainer>
                        {/* <CoverMediaUpLoadBox
                          coverMedia={coverGallery && coverGallery[index]}
                        /> */}
                      </CoverUpLoadItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </CoverUpLoadList>
            )}
          </Droppable>
        </CoverMediaContainer>
      </DragDropContext>
      <Button
        color="black"
        bgColor="lightGray"
        fullwidth
        onClick={handleAddCoverMedia}
      >
        <Icon iconName={AiOutlinePlus} size={12} margin="0 4px 0 0" />
        커버 추가하기
      </Button>
    </>
  );
};
export default CoverMedias;

const CoverMediaContainer = styled.div`
  margin-bottom: 24px;
`;

const CoverUpLoadItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const CoverUpLoadList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Input = styled.input`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const BoxContainer = styled.div`
  padding: 20px;
  background-color: yellow;
`;
