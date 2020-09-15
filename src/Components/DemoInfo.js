import React from 'react'
import './DemoInfo.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WhatshotIcon from '@material-ui/icons/Whatshot';
function DemoInfo() {
    return (
        <div className="demoInfo">
            <h4>This is Slack-Clone demo, built using following technologies:</h4>
           
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="React" secondary="JavaScript library for building user interfaces or UI components." />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="React Context API" secondary="To pass data through the component tree without having to pass props down manually at every level." />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="React Router" secondary="Navigation without refreshing page and to do deeplinking." />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Material UI" secondary="React components for faster and easier web development." />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Google Authentication" secondary="User Identity authentication." />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="NPM" secondary="Node package manager for Javascript" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Cloud Firestore" secondary="Real time database  - flexible, scalable for mobile, web, and server development from Firebase and Google Cloud Platform." />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WhatshotIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Firebase Hosting" secondary="Production-grade web content hosting for developers - fast and secure hosting for your web app, static and dynamic content, and microservices." />
                </ListItem>
            </List>
        </div>
    )
}

export default DemoInfo
