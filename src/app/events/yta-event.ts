export interface YtaEvent {
  id: number
  title: string
  paragraph: string
  trainername: string
  date: string
  time: string
  icon: string
  y_iconimage: string // base64 encoded image
  hostedby: string
}

export interface ApiResponse {
  message: string
  data: YtaEvent[]
}

