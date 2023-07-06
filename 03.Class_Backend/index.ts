import { DataSource } from 'typeorm'
import {Board} from "./Board.postgres";
import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";


// API-DOCS 만들기
const typeDefs = `#graphql
    type Query {
        hello: String
    }
`;

// API 만들기
const resolvers = {
    Query: {
        hello: () => 'world',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

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

    startStandaloneServer(server).then(() => {
        console.log('GraphQL 서버가 실행되었어요~!!') // 포트: 4000번
    });
}).catch((error) => {
    console.log('DB 접속에 실패하였습니다.')
    console.log('원인', error)
})