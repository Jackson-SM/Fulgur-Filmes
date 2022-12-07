import {
  BellIcon,
  DashboardIcon,
  EnvelopeClosedIcon,
  ExitIcon,
  GearIcon,
  PersonIcon,
  QuestionMarkCircledIcon,
  UploadIcon,
} from '@radix-ui/react-icons';
import React from 'react';

import imageAvatar from '../../assets/avatar.jpeg';
import { useAuth } from '../../hooks/useAuth';
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  DropdownArrow,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownMenuSeparator,
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
  const { logout, user } = useAuth();

  return (
    <DropdownRoot>
      <DropdownTrigger>
        <AvatarPerson />
      </DropdownTrigger>
      <DropdownPortal>
        <DropdownContent>
          <DropdownLabel>{user?.name}</DropdownLabel>
          <DropdownMenuSeparator />
          <DropdownGroup>
            <DropdownLabel>General</DropdownLabel>
            <DropdownItem>
              My Profile <PersonIcon />
            </DropdownItem>
            <DropdownItem>
              Notification <BellIcon />
            </DropdownItem>
            <DropdownItem>
              Inbox <EnvelopeClosedIcon />
            </DropdownItem>
            <DropdownItem>
              Settings <GearIcon />
            </DropdownItem>
          </DropdownGroup>
          <DropdownMenuSeparator />
          <DropdownGroup>
            <DropdownLabel>Managment</DropdownLabel>
            <DropdownItem as="a" href="/managment/panel">
              Panel <DashboardIcon />
            </DropdownItem>
            <DropdownItem as="a" href="/managment/upload">
              Upload <UploadIcon />
            </DropdownItem>
          </DropdownGroup>
          <DropdownMenuSeparator />
          <DropdownLabel>Others</DropdownLabel>
          <DropdownGroup>
            <DropdownItem>
              Help <QuestionMarkCircledIcon />
            </DropdownItem>
            <DropdownItem onClick={logout}>
              Logout <ExitIcon />
            </DropdownItem>
          </DropdownGroup>
          <DropdownArrow />
        </DropdownContent>
      </DropdownPortal>
    </DropdownRoot>
  );
}

export function Avatar({ dropdown, ...props }: AvatarProps) {
  return dropdown ? <AvatarDropdown /> : <AvatarPerson />;
}
