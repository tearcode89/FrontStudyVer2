interface IExampleProps {
    group: string;
    children: JSX.Element;
}
export default function Example(props: IExampleProps): JSX.Element {
    return (
        <>
            <div>안녕하세요 저는 민지입니다.</div>
            <div>{props.group}</div>
            <div>{props.children}</div>
            <div>안녕하세요 저는 해린입니다.</div>
        </>
    );
}
