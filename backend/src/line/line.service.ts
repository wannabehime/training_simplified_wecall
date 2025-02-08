import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { EntryDto } from 'src/entries/dto/entry.dto';
import { messagingApi } from '@line/bot-sdk';

const { MessagingApiClient } = messagingApi;
const client = new MessagingApiClient({
  channelAccessToken:
    'eyJhbGciOiJIUzI1NiJ9.M4S6hrDAyzF2lqFFccZQA-dxj2lPl9ITiJ-hB_jn5EVmjlqhP4WhP76jq7u1Gv_6qdZzapXR1PX1If49Kv9o3xKSUyH5vSIy7az_m3QGhwZ0cfnnMAW9XwHvZ4UhsrI1.CnGY3BVXuyTA_ABxagVX9WlHpe0TNPXbG9D5V-hTNS4',
});

@Injectable()
export class LineService {
  async sendEntryCompletionMessage(userId: number, entry: EntryDto[]) {
    await client.pushMessage({
      to: userId,
      messages: message,
    });
  }

  create(createLineDto: CreateLineDto) {
    return 'This action adds a new line';
  }

  findAll() {
    return `This action returns all line`;
  }

  findOne(id: number) {
    return `This action returns a #${id} line`;
  }

  update(id: number, updateLineDto: UpdateLineDto) {
    return `This action updates a #${id} line`;
  }

  remove(id: number) {
    return `This action removes a #${id} line`;
  }
}
