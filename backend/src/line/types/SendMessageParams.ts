import { EntryDto } from '../../entries/dto/entry.dto';

export interface SendMessageParams {
  userId: string;
  entry?: EntryDto;
  messageType: string;
}
