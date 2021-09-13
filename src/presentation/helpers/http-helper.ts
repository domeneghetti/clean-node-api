import { ServerError } from '../erros/'
import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = () => ({
  statusCode: 500,
  body: new ServerError()
})

export const ok = (data: any) => ({
  statusCode: 200,
  body: data
})
