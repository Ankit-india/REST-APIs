import dotenv from 'dotenv';
dotenv.config();
// object destructuring we can wrote process.env.APP_PORT
export const {
    APP_PORT,
    DEBUG_MODE
} = process.env; // isme abhi .env m jitni keys hongi sari ispe rhengi
