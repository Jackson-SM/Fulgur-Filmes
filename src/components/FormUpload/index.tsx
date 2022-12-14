import React from 'react';
import { Control, Controller, useForm } from 'react-hook-form';

import { Api } from '../../api/api';
import { Button } from '../Button';
import { TextColor } from '../TextColor';
import { InputFile, InputUpload } from './components/InputUpload';
import { SelectUpload } from './components/Select';
import { TextArea } from './components/TextArea';
import {
  BoxRowFields,
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
};

type PropsStepsControl = {
  control: Control<typeof defaultValuesPropsForm>;
  onSubmit?: () => void;
};

export function VideoInfo({ control }: PropsStepsControl) {
  const optionsType = [
    { value: 'movie', label: 'Movie' },
    { value: 'serie', label: 'Serie' },
  ];
  const optionsClassification = [
    { value: 14, label: '14' },
    { value: 15, label: '15' },
    { value: 16, label: '16' },
    { value: 17, label: '17' },
    { value: 18, label: '18' },
  ];

  return (
    <>
      <TextColor size="medium" as="span">
        Upload <strong>Flash</strong>
      </TextColor>
      <InputField>
        <LabelInputField>Title</LabelInputField>
        <Controller
          name="title"
          control={control}
          render={({ field }) => <InputUpload {...field} ref={null} type="text" placeholder="Ex: Adão Negro" />}
        />
      </InputField>
      <InputField>
        <LabelInputField>Sinopse</LabelInputField>
        <Controller
          name="sinopse"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              ref={null}
              placeholder="Ex: lorem ipsum dolor it exist equals age"
              cols={40}
              rows={10}
            />
          )}
        />
      </InputField>
      <BoxRowFields>
        <InputField>
          <LabelInputField>Year</LabelInputField>
          <Controller
            name="year"
            control={control}
            render={({ field }) => <InputUpload {...field} ref={null} type="number" />}
          />
        </InputField>
        <InputField>
          <LabelInputField>Type</LabelInputField>
          <Controller
            name="type"
            control={control}
            render={({ field }) => <SelectUpload {...field} ref={null} options={optionsType} />}
          />
        </InputField>
      </BoxRowFields>
      <InputField>
        <LabelInputField>Classification</LabelInputField>
        <Controller
          name="classificationIndicative"
          control={control}
          render={({ field }) => <SelectUpload {...field} ref={null} options={optionsClassification} />}
        />
      </InputField>
    </>
  );
}

export function FormUpload() {
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
    formData.append('coverImage', data.cover[0]);
    formData.append('backgroundImage', data.background[0]);

    await Api.post('video', formData);
  });

  // eslint-disable-next-line default-case
  return (
    <StyledFormUpload onSubmit={onSubmit} encType="multipart/form-data">
      <ContainerFormUpload>
        <VideoInfo control={control} />
        <BoxRowFields>
          <InputField>
            <Button as="label" outlined="secondary" htmlFor="cover" css={{ width: '100%' }}>
              Cover Image
            </Button>
            <InputFile {...register('cover')} id="cover" />
          </InputField>
          <InputField>
            <Button as="label" outlined="secondary" htmlFor="background" css={{ width: '100%' }}>
              Background Image
            </Button>
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
