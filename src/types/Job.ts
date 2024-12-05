interface Tag {
  imgSrc: string
  name: string
}

interface Description {
  line: string
  color: string
}

interface Steps {
  name: string
  duration: string
  status: string
}

export interface Job {
  id: number
  name: string
  description: Description[]
  tags: Tag[]
  status: string
  link: boolean
  duration: string
  steps: Steps[]
}
