import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { WelcomeView } from './welcome.view'

const meta: Meta<typeof WelcomeView> = {
    title: 'WelcomeView',
    component: WelcomeView,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof WelcomeView>

export const Default: Story = {
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('welcome-view')

        void expect(container).toBeTruthy()
    },
}
