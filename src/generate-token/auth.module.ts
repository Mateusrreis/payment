import { Module } from "@nestjs/common";
import { AccessTokenService as AccessTokenService } from "./gateway/generate-token.gateway";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [HttpModule, ConfigModule.forRoot({
        isGlobal: true
    })],
    controllers: [],
    providers: [AccessTokenService],
})
export class AuthModule { }