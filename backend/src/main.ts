import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Init MongoDB Connection
  var db = mongoose.connection;
  db.on('error', () => {
    console.error('Error Connection to MongoDB')
  });
  db.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});


  await app.listen(5000, () => console.log(`Unit Test MongoDB with Jest app listening on port ${5000}!`));
}
bootstrap();
