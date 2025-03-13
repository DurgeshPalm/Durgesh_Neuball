import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FileUploadModule } from './file_upload/file_upload.module';
import { UserProfilePictureModule } from './user-profile-picture/user-profile-picture.module';
import { NeuballUsersModule } from './neuball_users/neuball_users.module';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'usersdetail'), // Serve uploaded files
      serveRoot: '/usersdetail', // Base URL for accessing uploaded files
    }),
    FileUploadModule,
    UserProfilePictureModule,
    NeuballUsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: process.env.DB_HOST || 'localhost',
      // port: Number(process.env.DB_PORT) || 3306,
      // username: process.env.DB_USER || 'root',
      // password: process.env.DB_PASS || 'Palm@123',
      // database: process.env.DB_NAME || 'testdb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // For development only; use migrations in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
