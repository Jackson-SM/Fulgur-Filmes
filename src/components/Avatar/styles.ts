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
});

export const DropdownPortal = styled(DropdownMenu.Portal, {});

export const DropdownContent = styled(DropdownMenu.Content, {
  minWidth: '220px',

  background: '$backgroundLight',
  color: '$text',

  '&[data-state="open"]': {
    animationDuration: '200ms',
    animationName: slideAndFadeUp,
  },
  '&[data-state="closed"]': {
    animationDuration: '200ms',
    animationName: slideAndFadeDown,
  },
});

export const DropdownGroup = styled(DropdownMenu.Group, {});

export const DropdownLabel = styled(DropdownMenu.Label, {
  paddingLeft: '20px',
  color: '$textDark',
  fontSize: '12px',
});

export const DropdownItem = styled(DropdownMenu.Item, {});

export const DropdownArrow = styled(DropdownMenu.Arrow, { fill: '$backgroundLight' });
