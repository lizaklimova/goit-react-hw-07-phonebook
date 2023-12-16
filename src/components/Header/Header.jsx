import statusBarImg from "../../img/status-bar.png";
import { IoIosArrowRoundBack, IoMdAdd } from "react-icons/io";
import {
  HeaderPart,
  StatusBar,
  NavWrapper,
  Title,
  AddBtn,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderPart>
      <StatusBar $bar={statusBarImg}></StatusBar>
      <NavWrapper>
        <IoIosArrowRoundBack size={50} />
        <Title>My Contacts</Title>
        <AddBtn type="button">
          <IoMdAdd size={50} />
        </AddBtn>
      </NavWrapper>
    </HeaderPart>
  );
};

export default Header;
