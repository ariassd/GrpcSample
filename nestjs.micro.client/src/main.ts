import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { service } from './constants';

async function bootstrap() {
  const logger = new Logger();
  const port = service.port;
  const app = await NestFactory.create(AppModule);
  await app.listen(port).then(() => {
    logger.verbose(`Client is ready and listening on http://localhost:${port}`);
    logger.debug(
      `Try the client using this command:
curl -d '{"data":[1,2,3]}' -H "Content-Type: application/json" -X POST http://localhost:${port}/add`,
    );
  });
}
bootstrap();
