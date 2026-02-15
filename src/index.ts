import './config/env'; // validates required env vars on startup
import app from './app';
import { env } from './config/env';
import logger from './utils/logger';

app.listen(env.PORT, () => {
  logger.info(`Server running at http://localhost:${env.PORT}`);
});
