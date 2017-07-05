import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down-circle'
import DonutLarge from 'material-ui/svg-icons/action/donut-large'

const BadgeSimple = (props) => (
  <div>
    <Badge
      badgeContent={props.count}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Generations">
        <DonutLarge />
      </IconButton>
    </Badge>
  </div>
);

export default BadgeSimple;