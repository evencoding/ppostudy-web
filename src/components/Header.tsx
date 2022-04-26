import styled from "styled-components";
import DarkMode from "./DarkMode";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10vw;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 15px 0;
`;

function Header() {
  return (
    <Wrapper>
      <Content>
        <span>PPoStudy</span>
        <DarkMode />
      </Content>
    </Wrapper>
  );
}

export default Header;
