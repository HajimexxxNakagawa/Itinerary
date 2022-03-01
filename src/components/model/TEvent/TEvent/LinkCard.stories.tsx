import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import {
  mockOgpData0,
  mockOgpData1,
  mockOgpData2,
  mockOgpData3,
} from "@/mocks/OgpData"

import { LinkCardView } from "./LinkCard"

export default {
  title: "Model/TEvent/LinkCard",
  component: LinkCardView,
} as ComponentMeta<typeof LinkCardView>

const Template: ComponentStory<typeof LinkCardView> = (args) => (
  <LinkCardView {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ogp: mockOgpData0,
}

export const NoOgImage = Template.bind({})
NoOgImage.args = {
  ogp: mockOgpData1,
}

export const NoFavicon = Template.bind({})
NoFavicon.args = {
  ogp: mockOgpData2,
}

export const LongDescription = Template.bind({})
LongDescription.args = {
  ogp: mockOgpData3,
}
