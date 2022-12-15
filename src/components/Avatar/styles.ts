import { violet } from '@radix-ui/colors';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { keyframes, styled } from '../../config/stitches.config';

export const AvatarRoot = styled(Avatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',

  width: 35,
  height: 35,
  borderRadius: '100%',

  overflow: 'hidden',
});
export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  color: 'white',
});

/// ////////////////////////////

const slideAndFadeUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});
const slideAndFadeDown = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(-10px)' },
});

export const DropdownRoot = styled(DropdownMenu.Root, {
  background: 'transparent',
});

export const DropdownTrigger = styled(DropdownMenu.Trigger, {
  background: 'transparent',
  outline: 'none',
  cursor: 'pointer',
  border: 'none',
});

export const DropdownPortal = styled(DropdownMenu.Portal, {});

export const DropdownContent = styled(DropdownMenu.Content, {
  minWidth: '220px',
  padding: 5,
  paddingTop: 15,
  paddingBottom: 15,

  display: 'flex',
  flexDirection: 'column',

  background: '$backgroundLight',
  color: '$text',

  borderRadius: 3,

  '&[data-state="open"]': {
    animationDuration: '200ms',
    animationName: slideAndFadeUp,
  },
  '&[data-state="closed"]': {
    animationDuration: '200ms',
    animationName: slideAndFadeDown,
  },
});

export const DropdownGroup = styled(DropdownMenu.Group, {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const DropdownLabel = styled(DropdownMenu.Label, {
  color: '$textDark',
  fontSize: '12px',
  padding: 4,
  paddingLeft: 30,
});

export const DropdownItem = styled(DropdownMenu.Item, {
  padding: 3,
  paddingLeft: 15,
  outline: 'none',
  fontSize: 14,
  color: '$secundaryLight',
  cursor: 'default',

  textDecoration: 'none',

  transition: 'all ease 130ms',

  borderRadius: 3,

  display: 'flex',
  justifyContent: 'space-between',

  '&:hover': {
    background: '$secundary',
    color: 'white',
  },
});

export const DropdownArrow = styled(DropdownMenu.Arrow, { fill: '$backgroundLight' });

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$secundary',
  margin: 10,
});
