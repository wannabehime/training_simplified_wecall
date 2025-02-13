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
  function convertEntryToMessage (entry: EntryDto) {
    {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://demo-flex-message-icon.s3.ap-northeast-1.amazonaws.com/key-visual-nero.png",
        "size": "full",
        "aspectRatio": "753:498",
        "aspectMode": "fit",
        "gravity": "center",
        "backgroundColor": "#B0B0B0"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "GENEROSITY",
                    "wrap": true,
                    "color": "#000000",
                    "size": "lg",
                    "lineSpacing": "5px",
                    "weight": "bold",
                    "align": "center"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "WeCALL サービス体験",
                    "wrap": true,
                    "color": "#000000",
                    "size": "md",
                    "flex": 5,
                    "lineSpacing": "5px",
                    "align": "center"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "text": "来場日",
                        "color": "#000000",
                        "size": "md",
                        "flex": 2,
                        "weight": "bold",
                        "margin": "lg"
                      },
                      {
                        "type": "text",
                        "text": "<%= reserve_date %>",
                        "wrap": true,
                        "color": "#000000",
                        "size": "md",
                        "flex": 5,
                        "margin": "xs"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "text": "来場時間",
                        "color": "#000000",
                        "size": "md",
                        "flex": 2,
                        "margin": "lg",
                        "weight": "bold"
                      },
                      {
                        "type": "text",
                        "text": "<%= reserve_time %>",
                        "wrap": true,
                        "color": "#000000",
                        "size": "md",
                        "flex": 5,
                        "margin": "xs"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "お名前",
                        "color": "#000000",
                        "size": "md",
                        "flex": 2,
                        "margin": "lg",
                        "weight": "bold"
                      },
                      {
                        "type": "text",
                        "text": "<%= family_name %> <%= given_name %> (<%= family_name_kana %> <%= given_name_kana %>)",
                        "wrap": true,
                        "color": "#000000",
                        "size": "md",
                        "flex": 5,
                        "margin": "xs"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "同伴者",
                        "color": "#000000",
                        "size": "md",
                        "flex": 2,
                        "margin": "lg",
                        "weight": "bold"
                      },
                      {
                        "type": "text",
                        "text": "<%= reserve_companion %>",
                        "wrap": true,
                        "color": "#000000",
                        "size": "md",
                        "flex": 5,
                        "margin": "xs"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "text": "会場案内",
                        "color": "#000000",
                        "size": "md",
                        "margin": "lg",
                        "weight": "bold",
                        "flex": 2
                      },
                      {
                        "type": "text",
                        "text": "20xx年x月xx日(月) - x月xx日(木)\n11時 - 20時 (最終入場 19:30)\nGENEROSITYホール\n東京都港区南青山1丁目15-9 第45興和ビル",
                        "wrap": true,
                        "color": "#000000",
                        "size": "md",
                        "flex": 5,
                        "margin": "xs"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "text",
                        "action": {
                          "type": "uri",
                          "label": "action",
                          "uri": "https://maps.app.goo.gl/jPjvXuYECYLVcw4y8"
                        },
                        "color": "#489EFD",
                        "flex": 3,
                        "wrap": true,
                        "decoration": "underline",
                        "text": "Google Mapで表示する",
                        "size": "md"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xl",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "separator",
                    "color": "#F1F1F4"
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "＜注意事項＞",
                        "align": "center",
                        "weight": "bold",
                        "color": "#000000",
                        "size": "md",
                        "flex": 2,
                        "margin": "lg"
                      },
                      {
                        "type": "text",
                        "text": "・予約時間から30分以上経過した場合、混雑状況によりご入場をお断りさせていただく場合がございます。",
                        "wrap": true,
                        "color": "#000000",
                        "size": "md",
                        "flex": 5,
                        "margin": "lg"
                      },
                      {
                        "type": "text",
                        "text": "・予約時間前にご来場した場合、お待ちいただく場合がございます。",
                        "wrap": true,
                        "color": "#000000",
                        "size": "md",
                        "flex": 5,
                        "margin": "lg"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "filler"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "filler"
                  },
                  {
                    "type": "text",
                    "text": "予約内容の確認・変更",
                    "color": "#ffffff",
                    "align": "center",
                    "flex": 4,
                    "size": "md",
                    "offsetTop": "-2px"
                  },
                  {
                    "type": "filler"
                  }
                ],
                "spacing": "sm"
              },
              {
                "type": "filler"
              }
            ],
            "height": "40px",
            "spacing": "sm",
            "margin": "lg",
            "borderWidth": "1px",
            "backgroundColor": "#000000",
            "cornerRadius": "8px",
            "action": {
              "type": "uri",
              "label": "予約内容の確認・変更",
              "uri": "https://0a53-118-3-229-70.ngrok-free.app/confirm"
            }
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "filler"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "filler"
                  },
                  {
                    "type": "text",
                    "text": "予約をキャンセル",
                    "color": "#ffffff",
                    "align": "center",
                    "flex": 4,
                    "size": "md"
                  },
                  {
                    "type": "filler"
                  }
                ],
                "spacing": "sm"
              },
              {
                "type": "filler"
              }
            ],
            "height": "40px",
            "borderWidth": "1px",
            "backgroundColor": "#000000",
            "cornerRadius": "8px",
            "margin": "md",
            "action": {
              "type": "uri",
              "uri": "https://0a53-118-3-229-70.ngrok-free.app/cancel/confirm",
              "label": "予約をキャンセル"
            }
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "separator",
                "margin": "md",
                "color": "#F1F1F4"
              }
            ],
            "margin": "md",
            "height": "17px"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "filler"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "filler"
                  },
                  {
                    "type": "text",
                    "text": "チェックイン",
                    "flex": 0,
                    "color": "#ffffff",
                    "size": "md"
                  },
                  {
                    "type": "icon",
                    "url": "https://demo-flex-message-icon.s3.ap-northeast-1.amazonaws.com/checkin_qr_icon.png",
                    "offsetTop": "xs"
                  },
                  {
                    "type": "filler"
                  }
                ],
                "spacing": "sm"
              },
              {
                "type": "filler"
              }
            ],
            "margin": "md",
            "height": "40px",
            "backgroundColor": "#000000",
            "borderWidth": "1px",
            "cornerRadius": "8px",
            "action": {
              "type": "uri",
              "label": "チェックイン",
              "uri": "https://0a53-118-3-229-70.ngrok-free.app/checkin"
            }
          }
        ]
      }
    }
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
