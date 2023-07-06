import * as S from "./MyfirebaseWrite.styles";
import type { IMyfirebaseWriteUIProps } from "./MyfirebaseWrite.types";

export default function MyfirebaseWriteUI(
  props: IMyfirebaseWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        작성자:
        <S.MyInput
          type="text"
          onChange={props.onChangeWriter}
          placeholder="작성자를 입력하세요."
        />
      </S.InputWrapper>
      <S.InputWrapper>
        제 목:
        <S.MyInput
          type="text"
          onChange={props.onChangeTitle}
          placeholder="제목을 입력하세요."
        />
      </S.InputWrapper>
      <S.InputWrapper>
        내 용:
        <S.MyInput
          type="text"
          onChange={props.onChangeContents}
          placeholder="내용을 입력하세요."
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.MyButton onClick={props.onClickSubmit}>
          <S.InnerLogo>💎 LIVE</S.InnerLogo> 등록하기
        </S.MyButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
