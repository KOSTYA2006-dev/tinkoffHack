import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Импортируем useSelector для получения токена из Redux

const DifficultySelection = ({ difficulty, setDifficulty }) => {
    return (
        <div>
            <label>Выберите сложность:</label>
            <RadioGroup value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <FormControlLabel value="easy" control={<Radio />} label="Легкий" />
                <FormControlLabel value="medium" control={<Radio />} label="Средний" />
                <FormControlLabel value="hard" control={<Radio />} label="Сложный" />
            </RadioGroup>
        </div>
    );
};

const Example = ({ difficulty }) => {
    const examples = {
        easy: 1,
        medium: 2,
        hard: 3,
    };

    return <p>Пример: {examples[difficulty]}</p>;
};

const AnswerForm = ({ answer, setAnswer }) => {
    return (
        <div>
            <TextField
                label="Ваш ответ"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                fullWidth
            />
        </div>
    );
};

const Primer = () => {
    const [difficulty, setDifficulty] = useState('easy');
    const [answer, setAnswer] = useState('');
    const token = useSelector(state => state.auth.token); // Получаем токен из Redux
    const [example, setExample] = useState('');
    const AnswerForm = ({ answer, setAnswer }) => {
        return (
            <div>
                <TextField
                    label="Ваш ответ"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    fullWidth
                />
            </div>
        );
    };
    const handleSubmit = async () => {
        try {
            const examples = {
                easy: 1,
                medium: 2,
                hard: 3,
            };

            const response = await axios.post('http://localhost:8089/api/generate', {
                user_id: 1,
                complexity: examples[difficulty],
                sign: "",
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json; charset=utf-8',
                },
            });
            const { operator1, operator2, znak } = response.data;
            const expression = `${operator1} ${znak} ${operator2}`;
            setExample(expression);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>

            <div>
                <DifficultySelection difficulty={difficulty} setDifficulty={setDifficulty} />
                <p>Пример: {example}</p>
                <AnswerForm answer={answer} setAnswer={setAnswer} />
                <Button variant="contained" onClick={handleSubmit}>Отправить</Button>
            </div>
        </div>
    );
};

export default Primer;
