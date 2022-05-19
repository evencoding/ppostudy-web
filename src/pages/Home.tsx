import { useState } from "react";
import styled from "styled-components";
import { usernameVar } from "../apollo";
import CreateRoom from "../components/CreateRoom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const MainInfo = styled.div`
  width: 50%;
  min-width: 400px;
`;
const CurTime = styled.div`
  width: 100%;
  margin-bottom: 3vh;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 22px;
  }
`;
const UserInfo = styled.div`
  display: flex;
  margin-bottom: 2vh;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 24px;
    margin-left: 8px;
  }
`;
const UserAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: skyblue;
`;
const Destination = styled.div`
  display: flex;
  width: 20%;
  min-width: 165px;
  align-items: center;
  justify-content: space-between;
  border: 3px dashed ${(props) => props.theme.textColor};
  padding: 7px 10px;
  span {
    font-size: 30px;
  }
`;
const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 20px;
    font-weight: 600;
    &:first-child {
      font-size: 15px;
      opacity: 0.6;
      margin-bottom: 2px;
    }
  }
`;
const CreateRoomBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    min-width: 400px;
    cursor: pointer;
    height: 60px;
    padding: 13px 0 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
    background-color: ${(props) => props.theme.RoomListColor};
    font-size: 18px;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
`;
const RoomInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 50%;
  min-width: 400px;
  height: 60%;
  margin-top: 1vh;
  background-color: ${(props) => props.theme.RoomListColor};
`;
const Cover = styled.div`
  background-color: black;
  opacity: 0.4;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

function Home() {
  const username = usernameVar();
  const [showBtn, setShowBtn] = useState(false);
  const ShowMakeBtn = () => {
    setShowBtn((cur) => !cur);
  };
  const CoverMakeBtn = () => {
    setShowBtn((cur) => !cur);
  };
  return (
    <>
      <Wrapper>
        <MainInfo>
          <CurTime>
            <span>2022 . 05 . 12</span>
          </CurTime>
          <UserInfo>
            <Profile>
              <UserAvatar />
              <span>{username}</span>
            </Profile>
            <Destination>
              <Progress>
                <span>달성도</span>
                <span>3:00</span>
              </Progress>
              <span>/</span>
              <Progress>
                <span>목표시간</span>
                <span>7:00</span>
              </Progress>
            </Destination>
          </UserInfo>
          <CreateRoomBtn onClick={ShowMakeBtn}>
            <div>방 만들기</div>
          </CreateRoomBtn>
        </MainInfo>
        <RoomInfo>Room List</RoomInfo>
      </Wrapper>
      {showBtn ? <Cover onClick={CoverMakeBtn} /> : null}
      {showBtn ? <CreateRoom /> : null}
    </>
  );
}

export default Home;
