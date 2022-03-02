import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { TEvent } from "@/components/model/TEvent/TEvent"

import { mockTEvent } from "@/mocks/TEvent"

export default {
  title: "Model/TEvent/TEvent",
  component: TEvent,
} as ComponentMeta<typeof TEvent>

const Template: ComponentStory<typeof TEvent> = (args) => <TEvent {...args} />

export const Default = Template.bind({})
Default.args = {
  tEvent: mockTEvent,
}
