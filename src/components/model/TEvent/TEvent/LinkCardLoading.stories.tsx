import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import { LinkCardLoading } from "@/components/model/TEvent/TEvent/LinkCardLoading"

export default {
  title: "Model/TEvent/LinkCardLoading",
  component: LinkCardLoading,
} as ComponentMeta<typeof LinkCardLoading>

const Template: ComponentStory<typeof LinkCardLoading> = (args) => (
  <LinkCardLoading {...args} />
)

export const Default = Template.bind({})
