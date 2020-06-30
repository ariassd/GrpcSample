import {
  Controller,
  Logger,
  Post,
  Body,
  OnModuleInit,
  Param,
} from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import {
  ClientGrpc,
  Client,
  ClientProxyFactory,
  ClientOptions,
  Transport,
} from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { join } from 'path';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');

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
}
