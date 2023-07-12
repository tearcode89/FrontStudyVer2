import {useForm} from "react-hook-form";
import {wrapFormAsync} from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
    writer: string
    title: string
    contents: string
    boardAddress: {
        addressDetail: string
    }
}

export default function GraphqlMutationPage(): JSX.Element {

    const { register, handleSubmit } = useForm<IFormData>()
    const onClickSubmit = (data: IFormData): void => {
        console.log(data)
    }

    console.log('리랜더링 되나요???')

    return(
        <>
            <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
                작성자: <input type="text" {...register("writer")}/>
                제목: <input type="text" {...register("title")}/>
                내용: <input type="text" {...register("contents")}/>
                주소: <input type="text" {...register("boardAddress.addressDetail")}/>
                <button>GRAPHQL-API 요청하기</button>
            </form>
        </>
    )
}

/*
    <button type="button" onClick={onClickBasket}>장바구니 담기</button>
    <button type="reset">지우자!! </button>
    <button type="submit">등록하자!! </button> // 기본값
 */