import { DataSource } from 'typeorm'
import {Board} from "./Board.postgres";
import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";


// API-DOCS 만들기
const typeDefs = `#graphql
    # 인자로 들어갈 때에는 type 이 아니라 input 으로 적어줘야 한다.
    input CreateBoardInput {
        writer: String,
        title: String,
        contents: String
    }
    
    type MyBoard {
        number: Int
        writer: String
        title: String
        contents: String
    }
    
    type Query {
        fetchBoards: [MyBoard]
    }
    
    type Mutation {
        # 연습용(example)
        # createBoard(writer: String, title: String, contents: String): String
    
        # 실무용(backend-practice 방식)
        createBoard(createBoardInput: CreateBoardInput): String
    }
`;

// API 만들기
const resolvers = {
    Query: {
        fetchBoards: async() => {
            // 1. 모두 꺼내기
            const result = await Board.find();
            console.log(result)

            // 2. 한개만 꺼내기
            // const result = await Board.findOne({ where: { number: 3 }});
            // console.log(result)

            return result
        }
    },

    Mutation: {
        createBoard: async (parent: any, args: any, context: any, info: any) => {
            await Board.insert({
                ...args.createBoardInput,

                // writer: args.createBoardInput.writer,
                // title: args.createBoardInput.title,
                // contents: args.createBoardInput.contents
            });

            return "게시글 등록에 성공했어요~!😘"
        },

    },

    // updateBoard: async () => {
    //     // 3번 게시글을 강인으로 바꿔줘
    //     await Board.update({number: 3}, {writer: "강인"})
    // },
    //
    // deleteBoard: async () => {
    //     // 3번 게시글을 삭제해줘~!
    //     // await Board.delete({ number: 3});
    //     // await Board.update({ number: 3}, { isDeleted: true}); // 3번 게시글 삭제했다고 치자 (소프트 삭제) => isDeleted가 초기값인 false 이면? 삭제가 안된거, true이면 삭제가 된거
    //     // await Board.update({ number: 3}, { deletedAt: new Date() }) // 3번 게시글이 삭제됐다고 치자 (소프트 삭제) => DeletedAt이 초기값 null 이면? 삭제가 안된거, new Date() 들어가 있으면 삭제된 것
    // }
};

// @ts-ignore
const server = new ApolloServer({
    typeDefs,
    resolvers,

    // 선택한 사이트만 CORS를 풀어주고 싶을떄
    // cors: {
    //     origin: ["https://www.naver.com","https://www.coupang.com"]
    // }
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