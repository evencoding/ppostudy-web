import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import FormError from "../components/FormError";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
      username
    }
  }
`;

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
const LoginForm = styled.div``;

function Login() {
  const navigate = useNavigate();
  const DoLogin = () => {
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onCompleted = (data) => {
    console.log(data);
    const {
      login: { ok, error, token, username },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token, username);
    }
  };
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: { username, password },
    });
  };
  const clearLoginError = () => {
    clearErrors("result");
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
        <LoginForm>
          <div>Email Login</div>
          <form onSubmit={handleSubmit(onSubmitValid)} autoComplete="off">
            <div>
              username:{" "}
              <input
                {...register("username", {
                  required: "Username is required",
                })}
                name="username"
                onChange={clearLoginError}
                type="text"
                placeholder="User Name"
              />
            </div>
            <div>
              password:{" "}
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
                name="password"
                onChange={clearLoginError}
                type="password"
                placeholder="Password"
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <FormError message={errors?.result?.message} />
        </LoginForm>
      </LoginWrap>
    </Wrapper>
  );
}

export default Login;
