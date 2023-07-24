import { Request, Response } from 'express'
import { CreateClienteUseCase } from './create-client.usecase'

export class CreateCustomerController {
    constructor() {}

    async handle(request: Request, response: Response) {
        const useCase = new CreateClienteUseCase
        try {
            const result = await useCase.execute(request.body)
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}