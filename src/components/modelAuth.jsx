import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, authenticateUser } from '../store/authSlice';

function RegistrationModal({ open, handleClose }) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistrationMode, setIsRegistrationMode] = useState(true);
    const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

    const handleSwitchMode = () => {
        setIsRegistrationMode(!isRegistrationMode);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { username, email, password };

        try {
            if (isRegistrationMode) {
                await dispatch(registerUser(formData));
            } else {
                await dispatch(authenticateUser(formData));
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{isRegistrationMode ? 'Регистрация' : 'Авторизация'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {isRegistrationMode
                        ? 'Пожалуйста, заполните форму, чтобы зарегистрироваться.'
                        : 'Введите свои учетные данные для входа.'}
                </DialogContentText>
                {!isAuthenticated ? (
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <TextField
                            margin="dense"
                            id="username"
                            label="Имя пользователя"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Пароль"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            fullWidth
                        />
                        {isRegistrationMode && (
                            <TextField
                                margin="dense"
                                id="email"
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                            />
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" type="submit" disabled={loading}>
                                {isRegistrationMode ? 'Зарегистрироваться' : 'Войти'}
                            </Button>
                            <Button variant="outlined" onClick={handleSwitchMode}>
                                {isRegistrationMode ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
                            </Button>
                        </Box>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Box>
                ) : (
                    <p>Вы уже авторизованы.</p>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default RegistrationModal;
