// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Toolbar, Typography, Button, Avatar} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RegistrationModal from "./modelAuth.jsx";


function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Toolbar sx={{ marginLeft: '122px', marginRight: '122px', display: 'flex', justifyContent: 'space-between' }}>

                <Typography variant="h6" component="div">

                    <img src="public/tinkoff.gif" alt="Tinkoff Logo" width="40" height="40" />

                </Typography>
                <div>
                    <Button color="inherit" component={RouterLink} to="/">
                        Главная
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/page2">
                        Page 2
                    </Button>
                    <Button color="inherit" onClick={handleClickOpen}>
                        Регистрация
                    </Button>
                </div>
                <Avatar src="/broken-image.jpg" />
            </Toolbar>
            <RegistrationModal open={open} handleClose={handleClose} /> {/* Render the modal component */}
        </>
    );
}

export default Header;