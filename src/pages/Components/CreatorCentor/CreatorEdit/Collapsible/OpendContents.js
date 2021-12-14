import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../share/Button';
import CoverGalleryForm from '../../../CreatorCentor/CreatorEdit/CreatorEditSection/ClassForm/ClassBasicInfoForm/CoverGalleryForm/CoverGalleryForm';
import ClassTitleForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassTitleForm/ClassTitleForm';
import ClassCreatorNickNameForm from '../../CreatorEdit/CreatorEditSection/ClassForm/ClassCreatorInfoForm/ClassCreatorNickNameForm/ClassCreatorNickNameForm';
import ClassCreatorPhoneForm from '../CreatorEditSection/ClassForm/ClassCreatorInfoForm/ClassCreatorPhoneForm/ClassCreatorPhoneForm';
import ClassCategoryForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassCategoryForm/ClassCategoryForm';
import ClassLevelForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassLevelForm/ClassLevelForm';
import ClassDetailInfoForm from '../CreatorEditSection/ClassForm/ClassDetailInfoForm/ClassDetailInfoForm';
import ClassCreatorDetailForm from '../CreatorEditSection/ClassForm/ClassCreatorInfoForm/ClassCreatorDetailForm/ClassCreatorDetailForm';
import ClassStatForm from '../CreatorEditSection/ClassForm/ClassBasicInfoForm/ClassStatForm.js/ClassStatForm';
import * as constData from './constData';

import styled from 'styled-components';
import { DescriptionStyled } from '../../../../../styles/CreatorCentor/CreatorStyled';
import { API } from '../../../../../config';

const OpendContents = ({
  openedPalceholder,
  contents,
  handleCloseContainer,
  projectData,
  sendData,
}) => {
  const {
    id,
    name,
    status,
    user_phone_number,
    user_name,
    level,
    healthStat,
    intellectStat,
    charmStat,
    artStat,
    user_description,
    thumbnail_image_url,
    description,
    category,
    sub_category,
    coverGallery,
  } = projectData;

  const handleSubmitToBack = data => {
    console.log(data);

    const formData = new FormData();
    const ImageDatas = new FormData();

    ImageDatas.append('file', 'fff');
    ImageDatas.append('file', 'fff');
    ImageDatas.append('file', 'fff');
    ImageDatas.append('file', 'fff');
    ImageDatas.append('file', 'fff');

    console.log(ImageDatas.getAll('file'));

    formData.append('course_id', id ?? null);
    formData.append('course_name', data.classTitle ?? null);
    formData.append('course_description', data.classDetail ?? null);
    formData.append('category', data.classCategory ?? null);
    formData.append('sub_category', data.classSubCategory);
    formData.append('healthStat', data.classHealthStat ?? 0);
    formData.append('intellectStat', data.classIntellectStat ?? 0);
    formData.append('charmStat', data.classCharmStat ?? 0);
    formData.append('artStat', data.classArtStat ?? 0);
    formData.append('level', data.classLevel ?? 0);
    formData.append('user_name', data.creatorNickName ?? null);
    formData.append('user_phone_number', data.creatorPhone ?? null);
    formData.append('user_description', data.creatorDetail ?? null);
    formData.append('status', status ?? null);
    formData.append('channel', '유튜브');
    formData.append('url', null ?? null);

    console.log(formData.getAll('course_description'));

    fetch(API.CLASS_COURSES, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDA2NDk3Njh9.Qw-eBDVLy9KeQp-ktnFyraRG1PQDpKR0_ZES2xVTIL8',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') alert('저장되었습니다.');
      })
      .catch(error => alert('데이터 저장에 실패했습니다.'));
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      classTitle: name,
      classCoverImage: null,
      classCoverImage1: null,
      classCoverImage2: null,
      classCoverImage3: null,
      creatorNickName: user_name,
      creatorPhone: user_phone_number,
      classCategory: category,
      classSubCategory: sub_category,
      classLevel: level,
      classHealthStat: healthStat,
      classIntellectStat: intellectStat,
      classCharmStat: charmStat,
      classArtStat: artStat,
      classDetail: description,
      creatorDetail: user_description,
    },
  });

  return (
    <Form onSubmit={handleSubmit(handleSubmitToBack)}>
      <Description>{openedPalceholder}</Description>
      {(contents => {
        switch (contents) {
          case constData.COVER_GALLERY_FORM:
            return (
              <CoverGalleryForm
                id={id}
                register={register}
                coverImage={thumbnail_image_url}
                coverGallery={coverGallery}
              />
            );
          case constData.CLASS_TITLE_FORM:
            return (
              <ClassTitleForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_CREATOR_NICKNAME_FORM:
            return (
              <ClassCreatorNickNameForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_CREATOR_PHONE_FORM:
            return (
              <ClassCreatorPhoneForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_CATEGORY_FORM:
            return (
              <ClassCategoryForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_LEVEL_FORM:
            return (
              <ClassLevelForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_STAT_FORM:
            return (
              <ClassStatForm
                register={register}
                errors={errors}
                watch={watch}
              />
            );
          case constData.CLASS_DETAIL_INFO_FORM:
            return <ClassDetailInfoForm register={register} />;
          case constData.CLASS_CREATOR_DETAIL_FORM:
            return <ClassCreatorDetailForm register={register} />;
          default:
            return;
        }
      })(contents)}
      <Buttons>
        <Button
          color="gray"
          bgColor="white"
          onClick={handleCloseContainer}
          type="button"
        >
          취소하기
        </Button>
        <Button color="white" bgColor="orange" type="submit">
          저장하기
        </Button>
      </Buttons>
    </Form>
  );
};

export default OpendContents;

const Buttons = styled.div`
  margin-top: 24px;
  border-radius: 4px;
  text-align: right;
`;

const Description = styled(DescriptionStyled)``;

const Form = styled.form`
  width: 100%;
`;
