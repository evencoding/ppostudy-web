import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BtnColor = {
  KaKaoBorder: "#FEE501",
  KaKaoTxt: "#2E2E2E",
  LineBorder: "#02C755",
  LineTxt: "white",
  EmailBorder: "#EDEDED",
  EmailTxt: "#696969",
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const LoginWrap = styled.div`
  width: 50%;
  min-width: 350px;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginBtn = styled.div<{ bgColor: string; txtColor: string }>`
  cursor: pointer;
  width: 70%;
  height: 60px;
  padding: 13px 0 13px;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txtColor};
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

function Login() {
  const navigate = useNavigate();
  const DoLogin = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <LoginWrap>
        <LoginBtn
          bgColor={BtnColor.KaKaoBorder}
          txtColor={BtnColor.KaKaoTxt}
          onClick={DoLogin}
        >
          <span>KaKaoTalk Login</span>
        </LoginBtn>
        <LoginBtn
          bgColor={BtnColor.LineBorder}
          txtColor={BtnColor.LineTxt}
          onClick={DoLogin}
        >
          <span>LINE Login</span>
        </LoginBtn>
        <LoginBtn
          bgColor={BtnColor.EmailBorder}
          txtColor={BtnColor.EmailTxt}
          onClick={DoLogin}
        >
          <span>Email Login</span>
        </LoginBtn>
      </LoginWrap>
    </Wrapper>
  );
}

export default Login;
