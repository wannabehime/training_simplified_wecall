import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LineService } from 'src/line/line.service';

@Module({
  controllers: [EntriesController],
  providers: [EntriesService, PrismaService, LineService],
  exports: [EntriesService],
})
export class EntriesModule {}
