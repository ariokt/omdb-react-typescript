import { StyledScrollTopButton } from "./ScrollTopButtonStyles";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {

  const handleClick = (e: any) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <StyledScrollTopButton onClick={handleClick}>
      <FaArrowUp />
    </StyledScrollTopButton>
  );
}

export default ScrollTopButton;
