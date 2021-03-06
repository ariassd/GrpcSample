## Description

GRPC Sample
How implement a server with grpc and how to retrieve data from a client

## Development

Using Visual Studio Code just open the file called `gRPC_sample.code-workspace` and install dependencies in each project.

## Installation

```bash
$ npm install --prefix nestjs.micro.client
$ npm install --prefix nestjs.micro.server
```

## Running the app option 1

```bash
$ sh run.sh
```

## Running the app option 2

```bash
# development
$ npm run start --prefix nestjs.micro.client
$ npm run start --prefix nestjs.micro.server

# watch mode
$ npm run start:dev --prefix nestjs.micro.client
$ npm run start:dev --prefix nestjs.micro.server

# production mode
$ npm run start:prod --prefix nestjs.micro.client
$ npm run start:prod --prefix nestjs.micro.server
```

## Folders

```text
- grpcSample (workspace folder)
  |-nestjs.micro.client
  |-nestjs.micro.server

```

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
