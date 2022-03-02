import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { TDay } from "@/components/model/TDay/TDay"

import { mockTDay } from "@/mocks/TDay"

export default {
  title: "Model/TDay/TDay",
  component: TDay,
} as ComponentMeta<typeof TDay>

const Template: ComponentStory<typeof TDay> = (args) => <TDay {...args} />

export const Default = Template.bind({})
Default.args = {
  tDay: mockTDay,
}
