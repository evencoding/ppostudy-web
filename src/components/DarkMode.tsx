import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  touch-action: pan-x;
  user-select: none;
`;

const DarkModeBtn = styled.div`
  background-color: #4d4d4d;
  border-radius: 30px;
  height: 24px;
  transition: 0.2s;
  width: 50px;
  display: flex;
  align-items: center;
`;

const Moon = styled.div`
  position: relative;
  left: 5px;
  height: 10px;
  span {
    align-items: center;
    display: flex;
    height: 12px;
    justify-content: center;
    width: 10px;
  }
`;

const Sun = styled.div`
  position: absolute;
  right: 8px;
  height: 8px;
  span {
    align-items: center;
    display: flex;
    height: 10px;
    justify-content: center;
    width: 10px;
  }
`;

const SwitchBtn = styled.div<{ isDark: boolean; isHover: boolean }>`
  background-color: #fafafa;
  border: 1px solid #4d4d4d;
  border-radius: 50%;
  height: 22px;
  left: ${(props) => (props.isDark ? "1px" : "27px")};
  position: absolute;
  top: 1px;
  transition: 0.25s;
  width: 22px;
  ${(props) => (props.isHover ? "box-shadow: 0 0 2px 3px #3578e5" : null)}
`;

function DarkMode() {
  const [DarkAtom, setDarkAtom] = useRecoilState(isDarkAtom);
  const [isHover, setIsHover] = useState(false);
  const mouseHover = () => {
    setIsHover((current) => !current);
  };
  const toggleDarkAtom = () => {
    setDarkAtom((current) => !current);
  };
  return (
    <Wrapper
      onClick={toggleDarkAtom}
      onMouseEnter={mouseHover}
      onMouseLeave={mouseHover}
    >
      <DarkModeBtn role="button" tabIndex={-1}>
        <Moon>
          <span>🌜</span>
        </Moon>
        <Sun>
          <span>🌞</span>
        </Sun>
        <SwitchBtn isDark={DarkAtom} isHover={isHover} />
      </DarkModeBtn>
    </Wrapper>
  );
}

export default DarkMode;
