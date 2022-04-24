import styled from "styled-components";
import DarkMode from "./DarkMode";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 15px 0;
`;

function Header() {
  return (
    <Wrapper>
      <span>PPoStudy</span>
      <DarkMode />
    </Wrapper>
  );
}

export default Header;
