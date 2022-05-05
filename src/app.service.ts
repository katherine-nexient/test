import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
   async getHello(): Promise<string> {
    console.log('skdfjsldfjds')
    const a = axios.create({baseURL:'https://jsonplaceholder.typicode.com/todos/1'})
    const res = await a.get('');
console.log('oay', res.data)
    return 'Hello World!';
  }
}
