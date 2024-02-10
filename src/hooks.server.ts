import { DB_URL } from '$env/static/private';
import connectToDatabase from 'db/mongo';
connectToDatabase(DB_URL);
