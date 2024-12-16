export class Feedback {
  service: string
  content: string
  status: string

  constructor(obj: FeedbackType) {
    Object.assign(this, obj)
  }
}

export interface FeedbackType {
  service: string
  content: string
  status: string
}
