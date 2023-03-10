import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  LoginButton,
  Wrapper,
} from "./LayoutHeader.style";
import { ILayoutHeaderProps } from "./LayoutHeader.type";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>๐LIVE์ค๊ณ ๋ง์ผ</InnerLogo>
        <div>
          <LoginButton onClick={props.onClickMoveToLogin}>๋ก๊ทธ์ธ</LoginButton>
          <InnerButton onClick={props.onClickSignup}>ํ์๊ฐ์</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
