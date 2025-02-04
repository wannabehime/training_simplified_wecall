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

    let isAccompaniedBoolean = true;
    if (entry.isAccompanied === 'なし') {
      isAccompaniedBoolean = false;
    }
    const data = {
      familyName: entry.familyName,
      personalName: entry.personalName,
      familyNameKana: entry.familyNameKana,
      personalNameKana: entry.personalNameKana,
      gender: entry.gender,
      birthday: new Date(entry.birthday),
      prefecture: entry.prefecture,
      tel: entry.tel,
      email: entry.email,
      isAccompanied: isAccompaniedBoolean,
      visitDay: new Date(entry.visitDay),
      visitTime: entry.visitTime,
    };

    return this.prisma.entries.create({ data });
  async addEntry(entry: EntryDto): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
  }

    let isAccompaniedBoolean = true;
    if (entry.isAccompanied === 'なし') {
      isAccompaniedBoolean = false;
    }
    return this.prisma.entries.update({
  async updateEntry(
    id: number,
    entry: UpdateEntryDto,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
      where: { id },
      data: {
        isAccompanied: isAccompaniedBoolean,
        visitDay: new Date(entry.visitDay),
        visitTime: entry.visitTime,
      },
    });
  }

  async deleteEntry(id: number): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    return this.prisma.entry.delete({
      where: { id },
    });
  }
}
