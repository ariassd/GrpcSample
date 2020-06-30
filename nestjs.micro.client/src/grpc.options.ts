import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

const port = 6001;
// Same options object used by microservice server
export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `localhost:${port}`,
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};
