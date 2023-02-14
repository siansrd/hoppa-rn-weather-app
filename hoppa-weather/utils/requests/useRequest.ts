import { useEffect, useState } from "react"
import axios from "axios"

export type DayWeather = {
  date: string
}

type ResponseState = {
  status: RequestStatus
  error: string | null
  data: any
}

export type RequestConfig = {
  url: string
  method: string
  params: {
    key: string
    q: string
    days: number
  }
}

enum RequestStatus {
  LOADING,
  SUCCESS,
  ERROR,
}

const useRequest = (config: RequestConfig): ResponseState => {
  const [responseState, setResponseState] = useState<ResponseState>({
    status: RequestStatus.LOADING,
    error: null,
    data: null,
  })

  const makeRequest = async () => {
    try {
      const response = await axios.request(config)
      setResponseState({
        status: RequestStatus.SUCCESS,
        error: null,
        data: response.data,
      })
    } catch (error) {
      setResponseState({
        status: RequestStatus.ERROR,
        error: error as any,
        data: null,
      })
    }
  }

  useEffect(() => {
    makeRequest()
  }, [config])

  return responseState
}

export default useRequest
