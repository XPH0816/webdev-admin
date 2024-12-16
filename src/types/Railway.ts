export class Railway {
  name: string
  status: string

  constructor(obj: RailwayType) {
    Object.assign(this, obj)
  }
}

export interface RailwayType {
  name: string
  status: string
}
