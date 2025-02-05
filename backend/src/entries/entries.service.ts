import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EntryDto } from './dto/entry.dto';
import { AddEntryDto } from './dto/add-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Injectable()
export class EntriesService {
  constructor(private readonly prisma: PrismaService) {}

  async getEntry(id: number): Promise<EntryDto | null> {
    return this.prisma.entries.findUnique({
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

  async addEntry(entry: AddEntryDto): Promise<EntryDto> {
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
  }

  async updateEntry(id: number, entry: UpdateEntryDto): Promise<EntryDto> {
    let isAccompaniedBoolean = true;
    if (entry.isAccompanied === 'なし') {
      isAccompaniedBoolean = false;
    }
    return this.prisma.entries.update({
      where: { id },
      data: {
        isAccompanied: isAccompaniedBoolean,
        visitDay: new Date(entry.visitDay),
        visitTime: entry.visitTime,
      },
    });
  }

  async deleteEntry(id: number): Promise<EntryDto> {
    return this.prisma.entries.delete({
      where: { id },
    });
  }
}
