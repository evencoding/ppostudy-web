import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }: any) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
