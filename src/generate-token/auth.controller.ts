import { Controller, Post } from "@nestjs/common";

@Controller()
export class AuthController {


    @Post('create_order')
    async postCreateOrder() {

    }

    @Post('complete_order')
    async postCompleteOrder() {

    }
}