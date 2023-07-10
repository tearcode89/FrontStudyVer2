import BoardWrite from "../../../src/components/commons/units/22-global-state/BoardWrite.container";
import {useRecoilState} from "recoil";
import {isEditState} from "../../../src/commons/stores";
import {useEffect} from "react";

export default function GlobalStateWithRecoilPage(): JSX.Element {
    const [isEdit , setIsEdit] = useRecoilState(isEditState);

        useEffect(() => {
            setIsEdit(true)
        },[])

    return(
        <>
            <BoardWrite />
        </>
    )
}