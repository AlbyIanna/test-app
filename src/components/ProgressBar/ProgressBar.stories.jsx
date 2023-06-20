import { ProgressBar } from './ProgressBar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    max: {
      control: 'number',
      type: { required: false }
    },
  },
};

const Template = (args) => <div style={{ width: '200px' }}>
  <ProgressBar {...args} />
</div>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({})
Default.args = {
  value: 20,
}

