import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest) : HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordconfirmation']
    for (const filed of requiredFields) {
      if (!httpRequest.body[filed]) {
        return badRequest(new MissingParamError(filed))
      }
    }
  }
}
