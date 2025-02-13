function Header() {
  const QuestionBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary[30]};
  border-radius: 20px 20px 20px 4px;
  padding: 24px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 700;
  outline: none;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 327px;
    height: 64px;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
    padding: 18px 16px;
  }
  `;

  return (
    <div>
      <QuestionBox></QuestionBox>
    </div>
  );
}

export default Header;