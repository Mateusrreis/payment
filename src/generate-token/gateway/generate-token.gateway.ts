import { HttpService } from "@nestjs/axios";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AccessTokenService {
    private auth = `${this.configService.get<string>('CLIENT_ID')}:${this.configService.get('CLIENT_SECRET')}`;


    constructor(private http: HttpService, private configService: ConfigService) { }


    async generateToken() {
        try {
            const data = 'grant_type=client_credentials'
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(this.auth).toString('base64')}`
            }
            const body = await firstValueFrom(this.http.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', data, { headers }));
            console.log('Funcionou', body)
        } catch (err) {
            console.error(err)
        }
    }
}