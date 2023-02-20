import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

import React from 'react';
import { Icon } from '@chakra-ui/react';
const BrgMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<AddIcon />} command="⌘T">
          New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default BrgMenu;

<Menu>
  <MenuButton
    as={IconButton}
    aria-label="Options"
    icon={<HamburgerIcon />}
    variant="outline"
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command="⌘T">
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command="⌘O">
      Open File...
    </MenuItem>
  </MenuList>
</Menu>;