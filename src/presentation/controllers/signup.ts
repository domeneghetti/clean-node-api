import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest) : HttpResponse {
    const requiredFields = ['name', 'email']
    for (const filed of requiredFields) {
      if (!httpRequest.body[filed]) {
        return badRequest(new MissingParamError(filed))
      }
    }
  }
}
