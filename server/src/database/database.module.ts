import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (ConfigServce: ConfigService) => ({
        type: 'postgres',
        host: ConfigServce.getOrThrow('POSTGRES_HOST'),
        database: ConfigServce.getOrThrow('POSTGRES_DB'),
        port: ConfigServce.getOrThrow('POSTGRES_PORT'),
        username: ConfigServce.getOrThrow('POSTGRES_USER'),
        password: ConfigServce.getOrThrow('POSTGRES_PASSWORD'),
        autoLoadEntities: true,
        synchronize: ConfigServce.getOrThrow('POSTGRES_SYNC'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
