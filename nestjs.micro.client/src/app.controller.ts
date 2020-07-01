import {
  Controller,
  Logger,
  Post,
  Body,
  OnModuleInit,
  Get,
} from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { service } from './constants';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('Client app controller');

  @Client(microserviceOptions) // <-- Add
  private client: ClientGrpc; // <-- this

  private grpcService: IGrpcService;

  constructor() {} // <-- Remove this

  onModuleInit() {
    // <--
    this.grpcService = this.client.getService<IGrpcService>('AppController'); // <-- Add this
  }

  /**
   * POST {{host}}/add HTTP/1.1
   * Host: localhost:3000
   * Content-Type: application/x-www-form-urlencoded
   * data[0]=10&data[1]=11&data[2]=12
   *
   * @param { number[] } data array of numbers to sum
   */
  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding ' + JSON.stringify(data));
    // return this.mathService.accumulate(data);  // <-- Change this
    return this.grpcService.accumulate({ data }); // <-- to this
  }

  @Get('help')
  async getHelp() {
    return `
This client exposes the follow commands
----
Add: It adds all the numbers in the list
POST: http://localhost:${service.port}/add.
BODY: {"data":[1,2,3]}
EG: curl -d '{"data":[1,2,3]}' -H "Content-Type: application/json" -X POST http://localhost:${service.port}/add


----
How to run services separately for debugging purposes and see outputs type the follow command:

    `;
  }
}
