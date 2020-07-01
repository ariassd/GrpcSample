import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path'; // <-- Add this

const logger = new Logger('Main');
const port = 6001;
// logger.debug(join(__dirname, '../src/app.proto'));
const microserviceOptions = {
  // transport: Transport.REDIS,  <-- Change this
  transport: Transport.GRPC, //  <-- to this
  options: {
    url: `localhost:${port}`,
    package: 'app', // <-- add this
    protoPath: join(__dirname, '../src/app.proto'), // <-- & this
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen(() => {
    logger.verbose(`Microservice is ready and listening on port ${port}`);
  });
}
bootstrap();
