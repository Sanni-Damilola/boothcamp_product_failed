import React from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaCarBattery } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [show, setShow] = React.useState(false);
  const post = () => {
    setShow(!show);
  };
  const removePost = () => {
    setShow(false);
  };

  return (
    <Container>
      <Wrapper>
        <Link style={{ textDecoration: "none" }} to={"/p"}>
          <Wrap>
            <Icon>
              <HiOutlineDevicePhoneMobile />
            </Icon>
          </Wrap>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/b"}>
          <Wrap>
            <Icon>
              <FaCarBattery />
            </Icon>
          </Wrap>
        </Link>
        <Add onClick={post}>
          <IoMdAdd />
        </Add>
        <Link style={{ textDecoration: "none" }} to={"/ps"}>
          <Wrap>
            <Icon>
              <GrProductHunt />
            </Icon>
          </Wrap>
        </Link>
        <Search>
          <BiSearch />
        </Search>
      </Wrapper>
      {show ? (
        <PostInput>
          <PostWrapper>
            <Input placeholder="post a device" type={"text"} /> <br />
            <Input placeholder="post device positon" type={"text"} />
            <ButtonWrapper>
              <Button cursor="" background_color="value">
                add device
              </Button>
              <Button onClick={removePost} cursor="value" background_color="">
                cancel
              </Button>
            </ButtonWrapper>
          </PostWrapper>
        </PostInput>
      ) : null}
    </Container>
  );
};

export default MobileHeader;

const PostWrapper = styled.div`
  width: 300px;
  padding-bottom: 15px;
  padding-top: 15px;
  background-color: #21212b;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

const PostInput = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  outline: none;
  margin: 9px;
  width: 200px;
  border-radius: 12px;
  background-color: transparent;
  height: 40px;

  padding-left: 20px;
  border: 4px solid rgb(48, 48, 61);
  color: white;

  @media screen and (max-width: 500px) {
    width: 228px;
  }

  ::placeholder {
    font-weight: 400;
    color: rgb(209, 209, 210);
    font-size: 13px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
`;
const Button = styled.div<{ background_color: string; cursor: string }>`
  background-color: ${({ background_color }) =>
    background_color ? "#eb72bb" : "#32323f"};
  border: 0;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 40px;
  text-transform: capitalize;
  color: white;
  font-weight: 500;
  margin-left: 10px;
  @media screen and (max-width: 500px) {
    width: 100px;
  }
  font-size: 16px;
  cursor: ${({ cursor }) => (cursor ? "pointer" : "not-allowed")};
  transition: all 360ms;
  :hover {
    transform: scale(0.9);
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: none;
  position: relative;
  background-color: transparent;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  @media screen and (max-width: 500px) {
    display: flex;
  }
  border-top: 1px solid rgb(0, 0, 0, 0.3);
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 60px;
  border-radius: 12px 12px 0px 0px;
`;
const Icon = styled.div`
  margin-top: 3px;
  background-color: #eb72bb;
  display: flex;
  color: white;
  width: 31px;
  font-size: 20px;
  height: 31px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  color: white;
  font-weight: 500;
  margin-left: 10px;
  text-transform: capitalize;
  font-size: 18px;
`;

const Add = styled.div`
  border-radius: 9px;
  font-size: 20px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  background-color: #eb72bb;
`;
const Search = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 4px;
`;
