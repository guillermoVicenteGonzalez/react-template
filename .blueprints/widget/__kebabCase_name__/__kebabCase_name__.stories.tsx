import type { Meta, StoryObj } from '@storybook/react'
import { {{ pascalCase name }}Widget } from './{{ kebabCase name }}.widget'

const meta: Meta<typeof {{ pascalCase name }}Widget> = {
    title: '{{ pascalCase name }}Widget',
    component: {{ pascalCase name }}Widget,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof {{ pascalCase name }}Widget>

export const Default: Story = {
    args: {},
    async play() {

    },
}
