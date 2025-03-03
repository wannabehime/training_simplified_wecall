import { EntryDto } from 'src/entries/dto/entry.dto';
import { FlexMessage } from '@line/bot-sdk/dist/messaging-api/model/flexMessage';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { importMessage } from 'src/line/importMessage';

export const getMessage = (
  messageType: string,
  entry?: EntryDto,
): FlexMessage => {
  const {
    visitDay,
    visitTime,
    familyName,
    personalName,
    familyNameKana,
    personalNameKana,
    isAccompanied,
  } = entry ?? { visitTime: '' };
  const formattedVisitDay = format(
    new Date(visitDay ?? new Date()),
    'yyyy年M月d日（E）',
    {
      locale: ja,
    },
  );
  const name = `${familyName} ${personalName}（${familyNameKana} ${personalNameKana}）`;
  const isAccompaniedStr = isAccompanied ? 'あり' : 'なし';

  return importMessage(messageType, {
    formattedVisitDay,
    name,
    visitTime,
    isAccompaniedStr,
  });
};
