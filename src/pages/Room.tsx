import styled from "styled-components";

const Wrapper = styled.div``;
const Main = styled.div``;
const Timer = styled.div``;
const UserCam = styled.div``;
const Chat = styled.div``;

function Room() {
  return (
    <Wrapper>
      <Main>
        <Timer>Profile</Timer>
        <UserCam>
          <div></div>
        </UserCam>
      </Main>
      <Chat></Chat>
    </Wrapper>
  );
}

export default Room;
