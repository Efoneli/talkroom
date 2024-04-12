import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Specify your frontend domain here
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  });
  await app.listen(3000);
}
bootstrap();
