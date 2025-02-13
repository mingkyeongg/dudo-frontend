import styled from "@emotion/styled";
import { useState } from "react";
import { motion } from "framer-motion";
import colors from "../../constants/colors";
import moreIcon from "../../assets/Icon/more.svg";

const JobAccordion = ({ title, children, isSelected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionContainer onClick={onSelect} isSelected={isSelected}>
      <AccordionHeader>
        <Title>{title}</Title>
        <Icon animate={{ rotate: isOpen ? 180 : 0 }} onClick={openHandler}>
          <MoreIcon src={moreIcon} alt="moreIcon" />
        </Icon>
      </AccordionHeader>
      <AccordionContent
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        applyPadding={isOpen}
      >
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  width: ${({ isSelected }) => (isSelected ? "calc(100% - 2px)" : "100%")};
  border: 2px solid ${({ isSelected }) => (isSelected ? colors.secondary[60] : "transparent")};
  background: ${({ isSelected }) => (isSelected ? colors.secondary[40] : colors.white)};
  box-shadow: ${({ isOpen }) => (isOpen ? "none" : "0px 2px 4px 0px #7B545426;")};

  border-radius: 16px;
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  box-sizing: border-box;
  transition: background 0.3s, border 0.3s;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const MoreIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const Icon = styled(motion.span)`
  font-size: 16px;
  transition: transform 0.3s ease;
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  font-size: 16px;
  color: #444;
  padding: ${({ applyPadding }) => (applyPadding ? "10px 24px" : "0px")}; 
  transition: padding 0.3s ease-in-out; 
`;

export default JobAccordion;
