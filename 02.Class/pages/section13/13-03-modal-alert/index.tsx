import { Modal } from "antd";
export default function ModalAlertPage(): JSX.Element {
    const onClickSuccess = (): void => {
        Modal.success({
            content: "여러분은 성공하셨습니다. 축하합니다.",
        });
    };
    const onClickError = (): void => {
        Modal.error({
            title: "어머 에러가 발생했네요",
            content: "여러분은 실패하셨습니다. 다시 시도해주세요",
        });
    };

    return (
        <>
            <button onClick={onClickSuccess}>성공했을때!!!</button>
            <button onClick={onClickError}>실패했을때!!!</button>
        </>
    );
}
