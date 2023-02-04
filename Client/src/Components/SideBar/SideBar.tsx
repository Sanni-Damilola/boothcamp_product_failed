import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import { FaCarBattery } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Routes from "../Routes/Routes";
import { Link } from "react-router-dom";
import MobileHeader from "../Header/MobileHeader";




const SideBar = () => {
  return (
    <Container>
      <Header />
      <MobileHeader />
      <Wrapper>
        <SideBarWrapper>
          <Category>Category</Category>
          <Link style={{ textDecoration: "none" }} to={"/p"}>
            <Wrap>
              <Icon color="#eb72bb">
                <HiOutlineDevicePhoneMobile />
              </Icon>
              <Text>phone</Text>
            </Wrap>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/b"}>
            <Wrap>
              <Icon color="#fc76a1">
                <FaCarBattery />
              </Icon>
              <Text>battery</Text>
            </Wrap>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/ps"}>
            <Wrap>
              <Icon color="#70c4bf">
                <GrProductHunt />
              </Icon>
              <Text>personal</Text>
            </Wrap>
          </Link>
        </SideBarWrapper>
        <SeeEachCategories>
          <Routes />
        </SeeEachCategories>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Wrapper = styled.div`
  display: flex;
`;

const SeeEachCategories = styled.div`
  width: calc(100% - 250px);
  height: calc(100vh - 60px);

  background-color: rgb(24, 24, 32);

  @media screen and (max-width: 500px) {
    background-color: transparent;
    width: 100%;
  }
`;

const SideBarWrapper = styled.div`
  width: 250px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: 40px;
  cursor: pointer;
`;
const Icon = styled.div<{ color: string }>`
  margin-top: 3px;
  background-color: ${(props) => props.color};
  display: flex;
  color: white;
  width: 40px;
  font-size: 20px;
  height: 40px;
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
const Category = styled.div`
  margin-top: 40px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-left: 30px;
`;

const Container = styled.div`
  background-color: #21212b;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
