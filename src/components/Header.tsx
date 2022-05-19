import { Link } from "react-router-dom";
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
  span {
    font-weight: 600;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>PPoStudy</span>
        </Link>
        <DarkMode />
      </Content>
    </Wrapper>
  );
}

export default Header;
