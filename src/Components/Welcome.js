import React from 'react'
import './Welcome.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome_header">
                <h3>Welcome...to Slack-Clone demo.
                      It is public app, messages will be visible to anyone who access this app.</h3>
            </div>
            <div className="welcome_list">
                <h4>Following features are working:</h4>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <InsertEmoticonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Google Authentication for Sign In" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <InsertEmoticonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Add Channel" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <InsertEmoticonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Select Channel" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <InsertEmoticonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Real time chat in channel" />
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default Welcome
