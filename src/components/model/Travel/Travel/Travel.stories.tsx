import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { Travel } from "@/components/model/Travel/Travel"

import { mockTravel } from "@/mocks/Travel"

export default {
  title: "Model/Travel/Travel",
  component: Travel,
} as ComponentMeta<typeof Travel>

const Template: ComponentStory<typeof Travel> = (args) => <Travel {...args} />

export const Default = Template.bind({})
Default.args = {
  travel: mockTravel,
}
