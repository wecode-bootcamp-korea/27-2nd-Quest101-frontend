import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import { API } from '../../../../../../../../config';

export const CoverUpLoadBoxStyled = styled.div`
  flex: 1;
  ${props => props.theme.flex('column', 'center', 'center')};
  position: relative;
  height: 260px;
  border: ${props => props.theme.borderGray};
  border-radius: ${props => props.theme.borderRadius4};
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
`;

const CoverImageUpLoadBox = ({ id, coverImage, register }) => {
  const [thumbImage, setThumbImage] = useState(coverImage ?? '');
  const mediaRef = useRef();

  // const { ref, ...field } = register('file');

  const handleInputClick = () => {
    mediaRef.current.click();
  };

  const handleUpLoadMedia = e => {
    if (!!mediaRef.current.value) {
      const srcURL = URL.createObjectURL(e.target.files[0]);
      const src = e.target.files[0];
      const type = e.target.files[0].type;
      setThumbImage(srcURL);

      (async () => {
        await fetch(`${API.CLASS_COURSES}/${id}`, {
          method: 'POST',
          headers: {
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDA2NDk3Njh9.Qw-eBDVLy9KeQp-ktnFyraRG1PQDpKR0_ZES2xVTIL8',
          },
          body: JSON.stringify({
            thumbnail_image: src,
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
    }
  };

  return (
    <CoverUpLoadBoxStyled onClick={handleInputClick} bgImage={thumbImage}>
      <ThumbnailBasicBox
        src="/images/photo-edit-cover.png"
        display={thumbImage ? 'none' : 'inline-block'}
      />
      <ImageInputButton
        // {...field}
        // mediaRef={ref}
        {...register('classCoverImage')}
        onChange={handleUpLoadMedia}
        ref={mediaRef}
      />
      <UploadInfoWrapper display={thumbImage ? 'none' : 'inline-block'}>
        <UploadInfo size="fontRegular" color="gray" weight="weightSemiBold">
          이미지를 첨부해주세요.
        </UploadInfo>
        <UploadInfo size="fontMicro" color="gray">
          4:3의 가로형 이미지를 추천합니다.
        </UploadInfo>
      </UploadInfoWrapper>
    </CoverUpLoadBoxStyled>
  );
};

export default CoverImageUpLoadBox;

// Thumbnail
const ThumbnailBasicImage = styled.img`
  display: ${props => props.display};
  width: 128px;
  height: 128px;
  margin: 32px;
`;

const ThumbnailBoxStyled = styled.div``;

const ThumbnailBasicBox = ({ src, display }) => (
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
  display: ${props => props.display};
  padding: 12px 0;
  text-align: center;
`;

const ImageInputButton = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;
`;
