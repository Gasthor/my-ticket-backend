import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const middlewares = [
  morgan('tiny'),
  helmet(),
  cors(),
];

export default middlewares;