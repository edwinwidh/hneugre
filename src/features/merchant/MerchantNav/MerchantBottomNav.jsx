import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles
} from '@material-ui/core';
import {
  Restaurant,
  List,
  MailOutline,
  AccountCircle
} from '@material-ui/icons';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
});

const MerchantBottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label='Restoran' icon={<Restaurant />} />
      <BottomNavigationAction label='Pesanan' icon={<List />} />
      <BottomNavigationAction label='Inbox' icon={<MailOutline />} />
      <BottomNavigationAction label='Account' icon={<AccountCircle />} />
    </BottomNavigation>
  );
};

export default MerchantBottomNav;
