import { Link } from 'react-router-dom';

import { styled } from '../../../../config/stitches.config';

export const ContainerLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const LinkNavbar = styled(Link, {
  textDecoration: 'none',
  color: '$text',
  transition: 'all ease 130ms',

  '&:hover': {
    color: '$textDark',
  },
});
