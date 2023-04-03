import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="sree chaitanya institute of technological sciences" src="https://th.bing.com/th?id=OIP.-yR4dO8mAtKwQlM7F2xgigHaFa&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
        </ListItemAvatar>
        <ListItemText
          primary="sree chaitanya institute of technological sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                7.1 CGPA
              </Typography>
              {" — B.Tech, ECE"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SR junior college" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITswYcpPMn7iJ83mlamGsqNiUj1DrCNQJoQ&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="SR junior college"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                97% SGPA
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Brilliant model school" src="https://c8.alamy.com/comp/X44XME/portrait-of-a-young-school-girl-smiling-X44XME.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brilliant model school"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                98% SGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}