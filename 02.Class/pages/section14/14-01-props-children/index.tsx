import Example from "../../../src/components/commons/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
    return (
        <>
            <div>+++++++++++++ 빨간색 파란색 초록색 +++++++++++++</div>
            <Example group="NewJeans">
                <div>
                    <input type="text" />
                    <div>저는 하니입니다.</div>
                    <button>클릭해주세요~!</button>
                </div>
            </Example>
            <div>+++++++++++++ 빨간색 파란색 초록색 +++++++++++++</div>
        </>
    );
}
