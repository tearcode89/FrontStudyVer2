export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

// 1. Partial 타입
type aaa = Partial<IProfile>

// 2. Required 타입
type bbb = Required<IProfile>

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit 타입
type ddd = Omit<IProfile, "school">

// 5. Record 타입
type eee = "해린" | "다니엘" | "하니" // 유니온 타입
let child: eee = "다니엘" // eee 타입의 3개의 값만 가능
let child2: string = "민지" // 모든 문자열 값이 다됨

type fff = Record<eee, IProfile> // eee를 키로 만들고 , IProfile을 키값의 value로 지정한다.

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby"
let myprofile:ggg = "hobby"

// 7. 타입과 인터페이스의 차이 => 인터페이스는 선언 병합이 가능
export interface IProfile{
    candy: number // 선업 병합으로 추가됨
}

// 8. 배운것 응용
let profile: Partial<IProfile> = {
    candy: 10
}