// const qqq: string = '안녕하세요~~';
//
// console.log(qqq);

import { DataSource } from 'typeorm'
import {Board} from "./Board.postgres";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "sangjun",
    password: "335130",
    database: "postgres",
    entities: [Board],
    synchronize: true,
    logging: true,
})

AppDataSource.initialize().then(() => {
    console.log('DB 접속에 성공하셨습니다.')
}).catch((error) => {
    console.log('DB 접속에 실패하였습니다.')
    console.log('원인', error)
})