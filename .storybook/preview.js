import "../src/styles/globals.css"
import * as NextImage from "next/image"
import { initialize, mswDecorator } from "msw-storybook-addon"
import { rest } from "msw"

import { withConsole } from "@storybook/addon-console"
import { addDecorator } from "@storybook/react"

// Initialize MSW
initialize()

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  // handlersにgetOgpのモックレスポンスを追加
  msw: {
    handlers: [
      rest.get("/api/getOgp", (_, res, ctx) => {
        return res(
          ctx.json({
            title: "RE SORT",
            description:
              "「非統合型リゾート≒君だけのリ・ソート」\n\n海山に隠された西の果ての街　佐世保\nこの小さなホテルには、\n恐縮ながら、垂直統合なコンセプトは存在しません。\n\n汽笛、アメリカ、野良猫、クレーン、君が代…この街をより深く味わうために、\nただただ、そこにあってほしい機能を、自由と開放を、ユーモアとＱＲコードを、そしてサウナを\nただただ、ちりばめた全３室とルーフトップ。\n\nこれが僕らのまちのリゾート。\n\n兎にも角にも僕らの街の、施設の、美しい写真の数々をまずはご堪能ください。\nそして旅先の候補としてピン留め頂くこと、いつの日かお会いできることを\n（無人運用ですが…近くでカフェもやってますから）\n心より楽しみにしております。\n\n良き旅を。\n\nhttps://www.resortsasebo.com/\n\n・キャビンサウナとミストサウナのお部屋がございます。\n・当日予約は15時までの受付となります。\n・駐車場はございません。近隣の駐車場をご利用ください。\n・施設内は禁煙となります。ご了承ください。\n",
            faviconUrl: "https://www.hafh.com/favicon.ico",
            pageUrl: "https://www.hafh.com/properties/989",
            ogImgUrl:
              "https://storage.googleapis.com/hafh-prod-property_image/ksd4vml3r7086yyb05l3mqjai3pj",
          })
        )
      }),
    ],
  },
}

export const decorators = [mswDecorator]
