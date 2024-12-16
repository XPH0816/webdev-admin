import { Feedback } from '@/types/Feedback'
export const feedbacks = [
  new Feedback({
    service: 'Kelana Jaya Line',
    content: 'The train is always late',
    status: 'active',
  }),
  new Feedback({ service: 'Kajang Line', content: 'The train is always full', status: 'active' }),
  new Feedback({ service: 'Ampang Line', content: 'The train is always dirty', status: 'active' }),
  new Feedback({
    service: 'Sri Petaling Line',
    content: 'The train is always slow',
    status: 'active',
  }),
  new Feedback({
    service: 'BRT Sunway Line',
    content: 'The train is always crowded',
    status: 'replied',
  }),
  new Feedback({
    service: 'MRT Sungai Buloh-Kajang Line',
    content: 'The train is always packed',
    status: 'active',
  }),
]
