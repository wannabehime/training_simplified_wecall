import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EntryDto } from './dto/entry.dto';

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
}
