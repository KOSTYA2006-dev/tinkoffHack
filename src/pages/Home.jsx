// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Button, Stack, Typography} from '@mui/material';


    function Home() {

        return (
            <Box sx={{
                flexGrow: 1,
                padding: '24px',
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column'
            }}>
                <Box sx={{display: 'flex', marginTop: "40px", flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Typography variant="h4" component="div" sx={{
                        color: 'black',
                        fontSize: 56,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        wordWrap: 'break-word'
                    }}>
                        Тинькофф<br/>образование
                    </Typography>

                </Box>
                <Stack direction="column" sx={{marginTop: "40px"}} spacing={2}>
                    <Typography variant="h6" component="div" sx={{
                        color: '#4D9FFF',
                        fontSize: 24,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>
                        # Решай примеры по математике
                        <img src="public/Student.png" alt="Tinkoff Logo" width="25px" height="25px"/>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{
                        color: '#4D9FFF',
                        fontSize: 24,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>
                        # Соревнуйся с другими!
                        <img src="public/manGeek.png" alt="Tinkoff Logo" width="25px" height="25px"/>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{
                        color: '#4D9FFF',
                        fontSize: 24,
                        fontFamily: 'Inter',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                    }}>
                        # Выигрывай крутые призы
                        <img src="public/smail.png" alt="Tinkoff Logo" width="25px" height="25px"/>
                    </Typography>
                </Stack>

                <Button variant="contained" color="warning" sx={{
                    width: '150px',
                    padding: '12px 24px',
                    marginTop: 5,
                    borderRadius: 20
                }}> {/* Set button width to its content */}
                    Старт
                </Button>
            </Box>
        );
    }

export default Home;