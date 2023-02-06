import React from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { accessContest } from "../Global/GlobalContext";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const post = () => {
    setShow(!show);
  };
  const removePost = () => {
    setShow(false);
  };

  const context = React.useContext(accessContest);

  const [ticketNumber, setPostDevice] = React.useState("");
  const [position, setPostDevicePositon] = React.useState("");
  const [deviceType, setPostDeviceType] = React.useState("");

  const postDeviceToDataBase = async () => {
    await axios
      .post(
        `https://bootcamp-47qt.onrender.com/api/post/${context?.data!._id}`,
        {
          ticketNumber,
          position,
          deviceType,
        }
      )
      .then((res) => {
        console.log("from header", res);
      });
  };

  return (
    <Container>
      <Menu>
        <HiMenu />
      </Menu>
      <Left>
        <Add onClick={post}>
          <IoMdAdd />
        </Add>
        <Search>
          <BiSearch />
        </Search>
        <Profile>e</Profile>
      </Left>

      {show ? (
        <PostInput>
          <Wrapper>
            <Input
              required
              value={deviceType}
              onChange={(e) => {
                setPostDeviceType(e.target.value);
              }}
              placeholder="post device type"
              type={"text"}
            />
            <Input
              required
              maxLength={3}
              value={ticketNumber}
              onChange={(e) => {
                setPostDevice(e.target.value);
              }}
              placeholder="post a ticket number"
              type={"text"}
            />{" "}
            <Input
              required
              maxLength={3}
              value={position}
              onChange={(e) => {
                setPostDevicePositon(e.target.value);
              }}
              placeholder="post device positon"
              type={"text"}
            />
            <ButtonWrapper onClick={postDeviceToDataBase}>
              <Button cursor="value" background_color="value">
                add device
              </Button>
              <Button onClick={removePost} cursor="value" background_color="">
                cancel
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </PostInput>
      ) : null}
    </Container>
  );
};

export default Header;

const Wrapper = styled.div`
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
  top: 0;
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
    width: 250px;
  }
  font-size: 16px;
  cursor: ${({ cursor }) => (cursor ? "pointer" : "not-allowed")};
  transition: all 360ms;
  :hover {
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }

  position: relative;

  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #21212b;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
const Menu = styled.div`
  color: rgb(209, 209, 210);
  font-size: 30px;
  margin-left: 30px;
  cursor: pointer;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Add = styled.div`
  border-radius: 9px;
  font-size: 20px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  margin-right: 20px;
  background-color: #eb72bb;
`;
const Search = styled.div`
  margin-right: 20px;
  color: white;
`;
const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-transform: uppercase;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid rgb(209, 209, 210);
`;
