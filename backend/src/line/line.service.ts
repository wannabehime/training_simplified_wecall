import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
// import { UpdateLineDto } from './dto/update-line.dto';
import { EntryDto } from 'src/entries/dto/entry.dto';
import { messagingApi } from '@line/bot-sdk';
import { convertEntryToMessage } from './convertEntryToMessage';
import { IdTokenVerifiedResponse } from './types/IdTokenVerifiedResponse';
import { IdTokenVerifiedError } from './types/IdTokenVerifiedError';

const { MessagingApiClient } = messagingApi;
const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN as string;
const client = new MessagingApiClient({
  channelAccessToken: channelAccessToken,
});

@Injectable()
export class LineService {
  async getUserId(idToken: string, clientId: string): Promise<string> {
    const response = await fetch('https://api.line.me/oauth2/v2.1/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        id_token: idToken,
        client_id: clientId,
      }),
    });

    const data = (await response.json()) as
      | IdTokenVerifiedResponse
      | IdTokenVerifiedError;

    if ('sub' in data) {
      return data.sub;
    } else {
      return data.error_description;
    }
  }

  async sendEntryCompletionMessage(userId: string, entry: EntryDto) {
    await client.pushMessage({
      to: userId,
      messages: [convertEntryToMessage(entry)],
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

  // update(id: number, updateLineDto: UpdateLineDto) {
  //   return `This action updates a #${id} line`;
  // }

  remove(id: number) {
    return `This action removes a #${id} line`;
  }
}
