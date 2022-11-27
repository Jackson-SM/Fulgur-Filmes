import React from 'react';

import imageAvatar from '../../assets/avatar.jpeg';
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownPortal,
  DropdownRoot,
  DropdownTrigger,
} from './styles';

type AvatarProps = {
  dropdown?: boolean;
};

export function AvatarPerson() {
  return (
    <AvatarRoot>
      <AvatarImage src={imageAvatar} />
      <AvatarFallback delayMs={600}>CT</AvatarFallback>
    </AvatarRoot>
  );
}

export function AvatarDropdown() {
  return (
    <DropdownRoot>
      <DropdownTrigger>
        <AvatarPerson />
      </DropdownTrigger>
      <DropdownPortal>
        <DropdownContent>
          <DropdownLabel>Progress</DropdownLabel>
          <DropdownItem>Algum Item</DropdownItem>
          <DropdownArrow />
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
}

export function Avatar({ dropdown, ...props }: AvatarProps) {
  return dropdown ? <AvatarDropdown /> : <AvatarPerson />;
}
