import express from 'express';
import morgan from 'morgan';
import routers from './routes/index';
import path from 'path'

const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api',routers);

//folder para alamcenar archivos públicos
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;