import React from 'react';
import { Outlet } from 'react-router-dom';

import { StyledButtonLink } from '../../components/Button/styles';
import { ContainerUpload } from './styles';

export function Upload() {
  return (
    <ContainerUpload>
      <StyledButtonLink outlined="secondary" to="/managment/upload/video">
        Upload Vídeo
      </StyledButtonLink>
      <StyledButtonLink outlined="secondary" to="/managment/upload/serie">
        Upload Serie
      </StyledButtonLink>
      <StyledButtonLink outlined="secondary" to="/managment/upload/banner">
        Upload Banner
      </StyledButtonLink>
      <StyledButtonLink outlined="secondary" to="/managment/upload/examples_videos">
        Upload Videos Examples
      </StyledButtonLink>
      <Outlet />
    </ContainerUpload>
  );
}
