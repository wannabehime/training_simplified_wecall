import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { messagingApi } from '@line/bot-sdk';
import { getMessage } from './getMessage';
import { IdTokenVerifiedResponse } from './types/IdTokenVerifiedResponse';
import { IdTokenVerifiedError } from './types/IdTokenVerifiedError';
import { SendMessageParams } from './types/SendMessageParams';

const { MessagingApiClient } = messagingApi;
const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN as string;
const client = new MessagingApiClient({
  channelAccessToken: channelAccessToken,
});

@Injectable()
export class LineService {
  async getProfile(
    idToken: string,
    clientId: string,
  ): Promise<IdTokenVerifiedResponse | IdTokenVerifiedError> {
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

    return (await response.json()) as
      | IdTokenVerifiedResponse
      | IdTokenVerifiedError;
  }

  async sendMessage(params: SendMessageParams) {
    await client.pushMessage({
      to: params.userId,
      messages: [getMessage(params.messageType, params.entry)],
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
