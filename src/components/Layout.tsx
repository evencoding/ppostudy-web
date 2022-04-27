import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10vw;
  height: 90vh;
  min-height: 350px;
  width: 100%;
`;

function Layout({ children }: { children?: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Layout;
