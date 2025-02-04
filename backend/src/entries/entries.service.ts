import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EntryDto } from './dto/entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { Entry } from '@prisma/client';

@Injectable()
export class EntriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getEntry(
    id: number,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'> | null> {
    return this.prisma.entry.findUnique({
      where: { id },
      select: {
        familyName: true,
        personalName: true,
        familyNameKana: true,
        personalNameKana: true,
        gender: true,
        birthday: true,
        prefecture: true,
        tel: true,
        email: true,
        isAccompanied: true,
        visitDay: true,
        visitTime: true,
      },
    });
  }

  async addEntry(entry: EntryDto): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    return this.prisma.entry.create({ data: entry });
  }

  async updateEntry(
    id: number,
    entry: UpdateEntryDto,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    return this.prisma.entry.update({
      where: { id },
      data: entry,
    });
  }

  async deleteEntry(id: number): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    return this.prisma.entry.delete({
      where: { id },
    });
  }
}
