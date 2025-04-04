import connectDB from '@config/db';
import app from './app';
import config from '@config/config';

connectDB();

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});