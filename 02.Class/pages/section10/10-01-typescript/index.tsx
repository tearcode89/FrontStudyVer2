export default function TypescriptPage(){

    // 타입명시가 필요한 상황
    let aaa = "오늘도 고고씽"
    // aaa = 3; => error

    // 숫자타입
    let ddd: number = 10;

    // 불린타입
    let eee: boolean = true;
    eee = false;
    //eee = 'false'; -> true로 작동함

    // 배열타입
    let fff: number[] = [1,2,3,4,5]
    let ggg: string[] = ['해린','다니엘','민지','하니','혜인']
    let hhh: (string | number)[] = ['미야와키 사쿠라', '김채원', '허윤진', '나카무라 카즈하', '홍은채', 10] // 타입을 추론해서 어떤 타입을 사용하는지 알아보기

    // 객체타입
    const profile = {
        name:'사쿠라',
        age: 25,
        group: 'lesserafim'
    }
    profile.name="허윤진" // 타입 추론으로 인해서 이것만 가능 (o)
    //profile.age="20살" (x)
    //profile.hobbby='노래부르기' (x)

    //객체타입
    interface IProfile {
        name: string
        age: number | string
        group: string
        hobby?: string
    }

    const profile2:IProfile = {
        name: "홍은채",
        age: 16,
        group: 'Lesserafim',
    }

    // 함수타입
    function add(num1: number, num2:number, unit:string): string {
        return num1 + num2 + unit
    }
    const result = add(1000,2000, 'won') // 결과의 리턴 타입도 예측 가능

    const add2 = (num1: number, num2: number, unit: string): string => {
        return num1 + num2 + unit;
    }
    const result2 = add2(12000, 5000, 'won') // 결과의 리턴 타이도 예측 가능

    console.log(result, result2);

    let qqq:any = '히힛'
    qqq = true;

    return(
        <>
        </>
    )
}