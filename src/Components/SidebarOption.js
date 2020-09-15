import React, { useState } from 'react'
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import db from '../firebase';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function rand() { return Math.round(Math.random() * 20) - 10; }

function getModalStyle() {
    const top = 30 + rand();
    const left = 45 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function SidebarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory();
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push('title');
        }
    };
    const [channelInput, setChannelInput] = useState('');
    const addChannel = () => {
        if (channelInput) { db.collection('rooms').add({ name: channelInput }); }
        setChannelInput('');
        handleClose();
    };
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { setOpen(true); };

    const handleClose = () => { setOpen(false); };

    const body = (
        <div style={modalStyle} className="sidebarOption_modal">
            <h2 id="simple-modal-title">Add Channel</h2>
            <div className="sidebarOption_modal_form">
                <input placeholder="Please enter channel name"
                    value={channelInput}
                    onChange={(e) => setChannelInput(e.target.value)} />
                <Button onClick={addChannel}>Add Channel</Button>
            </div>
        </div>
    );
    return (
        <>
            <div className="sidebarOption"
                onClick={addChannelOption ? handleOpen : selectChannel}>
                {Icon && <Icon className="sidebarOption_icon" />}
                {Icon ? (
                    <h3>{title}</h3>
                ) : (
                        <h3 className="sidebarOption_channel">
                            <span className="sidebarOption_hash">#</span> {title}</h3>
                    )}
            </div>
            {
                addChannelOption ? <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
                    : ''
            }
        </>
    )
}

export default SidebarOption
