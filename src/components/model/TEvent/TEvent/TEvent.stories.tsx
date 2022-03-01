import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { mockTEvent } from "@/mocks/TEvent"

import { TEvent } from "./TEvent"

export default {
  title: "Model/TEvent/TEvent",
  component: TEvent,
} as ComponentMeta<typeof TEvent>

const Template: ComponentStory<typeof TEvent> = (args) => <TEvent {...args} />

export const Default = Template.bind({})
Default.args = {
  tEvent: mockTEvent,
}
