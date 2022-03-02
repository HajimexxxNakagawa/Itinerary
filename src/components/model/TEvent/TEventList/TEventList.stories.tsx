import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { TEventList } from "@/components/model/TEvent/TEventList"

import { mockTEventList } from "@/mocks/TEvent"

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
