/* eslint-disable jsx-a11y/alt-text */
import { ImageIcon, UploadIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Api } from '../../api/api';
import { CardVideoPreview } from '../../pages/Home/components/CardMovie';
import { Button } from '../Button';
import { Input } from '../Input';
import { TextColor } from '../TextColor';
import { InputFile } from './components/InputUpload';
import { SelectUpload } from './components/Select';
import { TextArea } from './components/TextArea';
import {
  BoxRowFields,
  ButtonUploadCoverAndBackground,
  ContainerContinueOrBack,
  ContainerFormUpload,
  InputField,
  LabelInputField,
  StyledFormUpload,
} from './styles';

const defaultValuesPropsForm = {
  title: '',
  sinopse: '',
  year: 2020,
  type: 'movie',
  classificationIndicative: 14,
  cover: '',
  background: '',
  time: '',
};

export function FormUpload() {
  const [coverPreviewImage, setCoverPreviewImage] = useState<string | ArrayBuffer | null | undefined>();

  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      ...defaultValuesPropsForm,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('sinopse', data.sinopse);
    formData.append('classificationIndicative', `${data.classificationIndicative}`);
    formData.append('type', data.type);
    formData.append('year', `${data.year}`);
    formData.append('time', `${data.time}`);
    formData.append('cover', data.cover[0]);
    formData.append('backgroundImage', data.background[0]);

    const { data: response } = await Api.post('video', formData);
    console.log(response);
  });

  const getImageAndSetPreview = (change: React.ChangeEvent<HTMLInputElement>) => {
    const file = change.target.files![0];

    const reader = new FileReader();

    reader.onload = (event) => {
      const readerTarget = event.target;

      const result = readerTarget?.result;

      setCoverPreviewImage(result);
    };

    reader.readAsDataURL(file);
  };

  const optionsType = [
    { value: 'movie', label: 'Movie' },
    { value: 'serie', label: 'Serie' },
  ];

  // eslint-disable-next-line default-case
  return (
    <StyledFormUpload onSubmit={onSubmit} encType="multipart/form-data">
      {coverPreviewImage && <CardVideoPreview css={{ height: 300 }} resultFile={String(coverPreviewImage)} />}
      <ContainerFormUpload>
        <TextColor size="medium" as="span">
          Fulgur <strong>Flix Upload</strong>
        </TextColor>
        <InputField>
          <Controller
            name="title"
            control={control}
            render={({ field }) => <Input {...field} ref={null} type="text" placeholder="Título do Vídeo" />}
          />
        </InputField>
        <BoxRowFields>
          <InputField>
            <LabelInputField htmlFor="year">Year</LabelInputField>
            <Controller
              name="year"
              control={control}
              render={({ field }) => <Input {...field} ref={null} type="number" id="year" />}
            />
          </InputField>
          <InputField>
            <LabelInputField htmlFor="classificationIndicative">Classification</LabelInputField>
            <Controller
              name="classificationIndicative"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  ref={null}
                  type="number"
                  id="classificationIndicative"
                  maxLength={18}
                  minLength={12}
                />
              )}
            />
          </InputField>
        </BoxRowFields>
        <InputField>
          <Controller
            name="sinopse"
            control={control}
            render={({ field }) => <TextArea {...field} ref={null} placeholder="Sinopse" cols={40} rows={10} />}
          />
        </InputField>
        <InputField>
          <Controller
            name="type"
            control={control}
            render={({ field }) => <SelectUpload {...field} ref={null} options={optionsType} />}
          />
        </InputField>
        <BoxRowFields>
          <InputField>
            <ButtonUploadCoverAndBackground
              htmlFor="cover"
              css={{
                '&::before': {
                  content: 'Cover',
                },
              }}
            >
              <ImageIcon />
            </ButtonUploadCoverAndBackground>
            <InputFile {...register('cover')} id="cover" onChange={getImageAndSetPreview} />
          </InputField>
          <InputField>
            <ButtonUploadCoverAndBackground
              htmlFor="background"
              css={{
                '&::before': {
                  content: 'Background',
                },
              }}
            >
              <UploadIcon />
            </ButtonUploadCoverAndBackground>
            <InputFile {...register('background')} id="background" />
          </InputField>
        </BoxRowFields>
        <ContainerContinueOrBack>
          <Button type="submit" size="medium" color="primary">
            Upload
          </Button>
        </ContainerContinueOrBack>
      </ContainerFormUpload>
    </StyledFormUpload>
  );
}
