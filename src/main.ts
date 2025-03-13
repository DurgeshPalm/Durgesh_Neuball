import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
//   const env = process.env.NODE_ENV || 'development';
//   dotenv.config({path:path.resolve(__dirname,`../.env.${env.trim()}`)})

const config = new DocumentBuilder()
.setTitle('Neuball Users API')
.setDescription('API documentation for Neuball Users endpoints')
.setVersion('1.0')
.addTag('Neuball Users')
.setBasePath('neuball-users') // For Swagger's base path
.build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document); // Swagger available at /api

  console.log(process.env.PORT);
  await app.listen(process.env.PORT ?? 3000);
  
}
bootstrap();




// const env = process.env.NODE_ENV || 'development';
//console.log(env);

// dotenv.config({path:path.resolve(__dirname,`../.env.${env.trim()}`)})
//console.log(path.resolve(__dirname,`../.env.${env.trim()}`));
//console.log('PORT:', process.env.PORT);
