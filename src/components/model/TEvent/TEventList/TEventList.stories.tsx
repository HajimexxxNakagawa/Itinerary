import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { mockTEventList } from "@/mocks/TEvent"

import { TEventList } from "./TEventList"

export default {
  title: "Model/TEvent/TEventList",
  component: TEventList,
} as ComponentMeta<typeof TEventList>

const Template: ComponentStory<typeof TEventList> = (args) => (
  <TEventList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  tEvents: mockTEventList,
}
