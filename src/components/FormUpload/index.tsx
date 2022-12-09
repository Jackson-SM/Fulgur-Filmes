import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '../Button';
import { InputUpload } from './components/InputUpload';
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

type PropsFormUpload = {
  title: string;
  sinopse: string;
  year: number;
  type: string;
  seasons: number | undefined;
  time: string | undefined;
  episodes: number | undefined;
  classificationIndicative: number;
};

const options = [
  { value: 'movie', label: 'Movie' },
  { value: 'serie', label: 'Serie' },
];

export function FormUpload() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      sinopse: '',
      year: 2020,
      type: 'movie',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <ContainerFormUpload>
      <StyledFormUpload onSubmit={onSubmit}>
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
        <BoxRowFields center>
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
              render={({ field }) => <SelectUpload {...field} ref={null} options={options} />}
            />
          </InputField>
        </BoxRowFields>
        <ContainerContinueOrBack>
          <Button size="medium" color="secundary">
            Back
          </Button>
          <Button size="medium" color="primary">
            Continue
          </Button>
        </ContainerContinueOrBack>
      </StyledFormUpload>
    </ContainerFormUpload>
  );
}
