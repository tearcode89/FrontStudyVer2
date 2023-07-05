import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
    color: lime;
    font-size: 24px;
`;

export default function LibraryIconPage(): JSX.Element {
    const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
        console.log(event.currentTarget.id);
    };

    return (
        <div id="deleteID" onClick={onClickDelete}>
            <MyIcon />
        </div>
    );
}
