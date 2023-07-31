interface IButtonProps {
    isActive: boolean
    title: string
}
export default function Button01(props: IButtonProps) {
    return (
        <button style={{ backgroundColor: props.isActive ? "lime" : ""}}>
            {props.title}
        </button>
    )
}
