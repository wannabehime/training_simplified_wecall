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
        birthDay: true,
        prefecture: true,
        tel: true,
        email: true,
        isAccompanied: true,
        visitDate: true,
      },
    });
  }

  async addEntry(entry: AddEntryDto): Promise<EntryDto> {
    const data = {
      familyName: entry.familyName,
      personalName: entry.personalName,
      familyNameKana: entry.familyNameKana,
      personalNameKana: entry.personalNameKana,
      gender: entry.gender,
      birthDay: new Date(entry.birthDay),
      prefecture: entry.prefecture,
      tel: entry.tel,
      email: entry.email,
      isAccompanied: entry.isAccompanied,
      visitDate: new Date(entry.visitDate),
    };

    return this.prisma.entries.create({ data });
  }

  async updateEntry(id: number, entry: UpdateEntryDto): Promise<EntryDto> {
    return this.prisma.entries.update({
      where: { id },
      data: {
        isAccompanied: entry.isAccompanied,
        birthDay: entry.birthDay,
        visitDate: entry.visitDate,
      },
    });
  }
}
