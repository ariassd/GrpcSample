import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const port = 6000;
  const app = await NestFactory.create(AppModule);
  console.log(`http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
