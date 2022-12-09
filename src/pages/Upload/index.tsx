import React from 'react';

import { FormUpload } from '../../components/FormUpload';
import { ContainerUploadPage } from './styles';

export function Upload() {
  return (
    <ContainerUploadPage>
      <FormUpload />
    </ContainerUploadPage>
  );
}
