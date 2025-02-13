import styled from "@emotion/styled";
import colors from "../../constants/colors";
import voiceEffectImg from "../../assets/image/voiceEffect.gif"
import breakpoints from "../../constants/breakpoints";

export const VoiceButton = () => {
  return (
    <VoiceButtonContainer>
      <VoiceEffect />
    </VoiceButtonContainer>
  );
}

const VoiceButtonContainer = styled.div`
  background-color: ${colors.secondary[90]};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
`;

const VoiceEffect = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  background-image: url(${voiceEffectImg});
  background-size: cover;
  background-position: center;

  @media (${breakpoints.mobile}px) {
    width: 60px;
    height: 60px;
  }
`;