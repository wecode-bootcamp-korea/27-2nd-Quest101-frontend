import React, { useRef, useState } from 'react';

import { Icon } from '../../../../../share/Icon';

import styled from 'styled-components';
import { BiMenu } from 'react-icons/bi';
import { API } from '../../../../../../../../config';

export const CoverUpLoadBoxStyled = styled.div`
  flex: 1;
  ${props => props.theme.flex('column', 'center', 'center')};
  position: relative;
  height: 140px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`;

const CoverMediaUpLoadBox = ({ coverMedia, uploadType }) => {
  const [thumbImage, setThumbImage] = useState(coverMedia ?? '');
  const [thumbImageType, setThumbImageType] = useState();
  const mediaRef = useRef();

  const handleInputClick = () => {
    mediaRef.current.click();
  };

  const handleUpLoadMedia = e => {
    if (!!mediaRef.current.value) {
      const src = URL.createObjectURL(e.target.files[0]);
      const type = e.target.files[0].type;
      setThumbImage(src);

      (async () => {
        await fetch(`${API.CLASS_COURSES}/`, {
          method: 'POST',
          headers: {
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDA2NDk3Njh9.Qw-eBDVLy9KeQp-ktnFyraRG1PQDpKR0_ZES2xVTIL8',
          },
          body: JSON.stringify({
            thumbnail_image: thumbImage,
            content_type: type,
          }),
        })
          .then(res => res.json())
          .then(result => {
            if (result.MESSAGE === 'SUCCESS') {
              setThumbImage(src);
              alert('저장되었습니다.');
            }
          })
          .catch(error => alert('이미지 저장에 실패했습니다.'));
      })();

      return setThumbImageType(type);
    }
    return;
  };

  return (
    <CoverUpLoadBoxStyled onClick={handleInputClick} bgImage={thumbImage}>
      <ThumbnailBasicBox
        src="/images/photo-edit-cover.png"
        display={thumbImage ? 'none' : 'inline-block'}
      />
      {thumbImageType?.match(/image\/+/) ? (
        <>
          <ImageInputButton ref={mediaRef} onChange={handleUpLoadMedia} />
          <UploadInfoWrapper display={thumbImage ? 'none' : 'inline-block'}>
            <UploadInfo size="fontRegular" color="gray" weight="weightSemiBold">
              이미지를 첨부해주세요.
            </UploadInfo>
            <UploadInfo size="fontMicro" color="gray">
              4:3의 가로형 이미지를 추천합니다.
            </UploadInfo>
          </UploadInfoWrapper>
        </>
      ) : (
        <>
          <DragIcon iconName={BiMenu} size={18} margin="8px" />
          <MediaInputButton ref={mediaRef} onChange={handleUpLoadMedia} />
          {thumbImage && <VideoBox src={thumbImage} controls />}
        </>
      )}
    </CoverUpLoadBoxStyled>
  );
};

export default CoverMediaUpLoadBox;

// Thumbnail
const ThumbnailBasicImage = styled.img`
  display: ${props => props.display};
  width: 72px;
  height: 72px;
  margin: 32px;
`;

const ThumbnailBoxStyled = styled.div``;

const ThumbnailBasicBox = ({ src, size, display }) => (
  <ThumbnailBoxStyled>
    <ThumbnailBasicImage src={src} display={display} />
  </ThumbnailBoxStyled>
);

// ImageUpload
const UploadInfo = styled.p`
  margin-bottom: 8px;
  color: ${props => props.theme[props.color]};
  font-size: ${props => props.theme[props.size]};
  font-weight: ${props => props.theme[props.weight]};
`;

const UploadInfoWrapper = styled.div`
  padding: 12px 0;
  display: ${props => props.display};
`;

const ImageInputButton = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;
`;

// MediaUpload
const MediaInputButton = styled.input.attrs({
  type: 'file',
  accept: 'image/*,video/mp4,video/*',
})`
  display: none;
`;

const DragIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
`;

const VideoBox = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
`;
