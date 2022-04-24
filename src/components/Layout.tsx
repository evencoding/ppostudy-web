import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10vw;
`;

function Layout({ children }: any) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
