import { Module } from '@nestjs/common';
import { EntriesModule } from './entries/entries.module';
import { LineModule } from './line/line.module';

@Module({
  imports: [EntriesModule, LineModule],
})
export class AppModule {}
