import React, { useRef } from 'react';
import styled from 'styled-components';
import CoverMedias from './CoverMedias';

import * as CreatorStyled from '../../../../../../../../styles/CreatorCentor/CreatorStyled';
import HelperBox from '../../../../../share/Helper';
import CoverImageUpLoadBox from './CoverImageUpLoadBox';

const CoverGalleryForm = ({ coverImage, coverGallery, register, id }) => {
  const coverImageRef = useRef(null);
  const { ref, ...rest } = register('coverImageRef');

  const handleInputClick = () => {
    coverImageRef.current.click();
  };

  return (
    <Container>
      <CoverImageAndHelper>
        <CoverImageBox onClick={handleInputClick}>
          <Input
            name="coverImage"
            type="file"
            accept="image/*"
            {...rest}
            ref={e => {
              ref(e);
              coverImageRef.current = e;
            }}
          />
        </CoverImageBox>
        <HelperBox />
      </CoverImageAndHelper>

      {/* <Input
        {...register('classCoverImage4')}
        type="file"
        accept="image/*"
        ref={mediaRef}
      ></Input>
      <Input
        {...register('classCoverImage5')}
        type="file"
        accept="image/*"
        ref={mediaRef}
      ></Input>
      <Input
        {...register('classCoverImage6')}
        type="file"
        accept="image/*"
        ref={mediaRef}
      ></Input>
      <Input
        {...register('classCoverImage7')}
        type="file"
        accept="image/*"
        ref={mediaRef}
      ></Input> */}

      {/* <ImageContainer>
        <CoverImageUpLoadBox
          id={id}
          coverImage={coverImage}
          register={register}
        />
        <HelperBox />
      </ImageContainer> */}

      <MediaContainer>
        <Label>커버 갤p러리</Label>
        <Description>
          페이지 상단 커버 영역에 사용할 이미지 또는 영상을 1개 이상
          추가해주세요.
        </Description>
        <CoverMedias register={register} coverGallery={coverGallery} />
      </MediaContainer>
    </Container>
  );
};

export default CoverGalleryForm;

const Description = styled(CreatorStyled.DescriptionStyled)``;

const Label = styled(CreatorStyled.FormLabelStyled)`
  ${props => props.theme.flex('column', '', '')};
`;

const MediaContainer = styled.div``;

const ImageContainer = styled.div`
  ${props => props.theme.flex('row', 'flex-start', 'space-between')};
  margin-bottom: 24px;
`;

const Container = styled.div`
  ${props => props.theme.flex('column', '', '')};
`;

const Input = styled.input`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const CoverImageBox = styled.div`
  width: 420px;
  height: 300px;
  padding: 20px;
  background-color: yellow;
`;

const CoverImageAndHelper = styled.div`
  ${props => props.theme.flex('row', '', 'space-between')};
`;
