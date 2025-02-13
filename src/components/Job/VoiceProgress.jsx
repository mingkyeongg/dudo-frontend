import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import colors from "../../constants/colors";
import { useRef } from "react";
import voiceIcon from "../../assets/Icon/voice.svg";

export const VoiceProgress = ({ active = false, onClick = () => {} }) => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!active) {
      clearInterval(intervalRef.current);
      setProgress(0);
      return;
    }

    const duration = 60;
    const intervalTime = 1000;
    const step = 100 / duration;

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    
    return () => clearInterval(intervalRef.current);
  }, [active]);

  return (
    <ProgressWrapper progress={progress} onClick={onClick}>
      <ProgressCircle progress={progress} />
      <InnerCircle>
        <VoiceIcon src={voiceIcon} alt="voice" />
      </InnerCircle>
    </ProgressWrapper>
  );
};

export default VoiceProgress;

const ProgressWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  border-radius: 50%;
`;

const VoiceIcon = styled.img`
  width: 78px;
  height: 78px;
`;

const ProgressCircle = styled.div`
  position: absolute;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: conic-gradient(
    ${colors.secondary[90]} ${({ progress }) => progress}%,
    #E0E0E0 ${({ progress }) => progress}%
  );
  mask-image: radial-gradient(circle, transparent 55%, black 56%);
  -webkit-mask-image: radial-gradient(circle, transparent 55%, black 56%);
`;

const InnerCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secondary[90]};
  z-index: 1;
`;
