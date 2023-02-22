import { getDay } from 'date-fns';
import { MenuItem, Menu, MenuButton, Portal, MenuList } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

export const ScheduleMenu = ({ workDays = [] }) => {
  const dayNames = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const result = getDay(new Date(Date.now())) - 1;
  console.log(result);
  return (
    <Menu>
      <MenuButton _active={{ color: 'mainOrange' }}>
        {workDays?.length > 0 && workDays[result]?.isOpen
          ? ` ${workDays[result].from} - ${workDays[result].to}`
          : 'Closed'}
      </MenuButton>

      <Portal>
        <MenuList>
          {workDays
            ? workDays.length > 0 &&
              workDays.map((day, index) => (
                <MenuItem key={index}>
                  {day?.isOpen
                    ? `${dayNames[index]} ${day.from} - ${day.to}`
                    : 'Closed'}
                </MenuItem>
              ))
            : `  Work-days data are missing`}
        </MenuList>
      </Portal>
    </Menu>
  );
};

ScheduleMenu.propTypes = {
  workDays: PropTypes.arrayOf(PropTypes.object),
};
