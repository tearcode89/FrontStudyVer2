import ChildPage from "./02-child";

export default function ParentPage(): JSX.Element {
    return(
        <>
            <ChildPage count={10}/>
            <br/>
            {ChildPage({ count: 50 })}
        </>
    )
}