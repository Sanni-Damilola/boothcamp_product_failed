import React from "react";
import styled from "styled-components";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { RiDeleteBin6Line, RiArrowUpSLine } from "react-icons/ri";
import axios from "axios";
import { accessContest } from "../Global/GlobalContext";

interface datas {
  _id: string;
  ticketNumber: string;
  position: string;
  deviceType: string;
}

const PComponent = () => {
  const [show, setShow] = React.useState(false);
  const post = () => {
    setShow(!show);
  };

  const [datas, setDatas] = React.useState<datas[]>([]);
  const context = React.useContext(accessContest);
  console.log("from header", context?.data);

  const getAllDevice = async () => {
    await axios
      .get("https://bootcamp-47qt.onrender.com/api/getall")
      .then((res) => {
        setDatas(res.data.data);
      });
  };

  React.useEffect(() => {
    getAllDevice();
  }, []);

  return (
    <Container>
      <DeviceName>phone</DeviceName>
      <h2>
        good morning, <br /> damilola sanni
      </h2>

      <OverFlow>
        {datas.map((e) => (
          <Device key={e._id}>
            <Wrap>
              {show ? (
                <UpdateInput maxLength={3} />
              ) : (
                <IconHold>
                  <Icon>
                    <HiOutlineDevicePhoneMobile />
                  </Icon>
                  <Text>{e.deviceType}</Text>
                </IconHold>
              )}
              <Update onClick={post}>
                <RiArrowUpSLine />
              </Update>
            </Wrap>
            <Hold>
              <Position>
                <Radio checked type={"radio"} />
                <Title>{e.ticketNumber}</Title>
                <Title>| |</Title>
                <Title>{e.position}</Title>
              </Position>
              <DateAndTime>Today At 20 : 30</DateAndTime>
            </Hold>
            <Button>
              <DeleteWrap>
                delete{" "}
                <DeleteIcon>
                  <RiDeleteBin6Line />
                </DeleteIcon>
              </DeleteWrap>
            </Button>
          </Device>
        ))}
      </OverFlow>
    </Container>
  );
};

export default PComponent;

const UpdateInput = styled.input`
  outline: none;
  width: 200px;
  border-radius: 12px;
  background-color: transparent;
  height: 40px;

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

const Update = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 30px;

  margin-right: 7px;
`;

const IconHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverFlow = styled.div`
  overflow-x: scroll;
  height: 500px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    height: 250px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
  height: 55px;
  border-radius: 0px 0px 12px 12px;
  border: 0;
  outline: none;
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  background-color: transparent;
`;

const DeleteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: red;
  text-transform: capitalize;
`;
const DeleteIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-left: 10px;
`;

const Position = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 30%;

  @media screen and (max-width: 500px) {
    padding: 0;
    width: 100%;
    align-items: center;
  }

  h2 {
    font-size: 30px;
    color: white;
    text-transform: capitalize;
  }
`;
const DeviceName = styled.div`
  color: white;
  margin-top: 40px;
  font-size: 23px;
  font-weight: 600;
  text-transform: capitalize;
`;
const Device = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  margin-bottom: 15px;
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  height: 200px;
  border-radius: 12px;
  background-color: #21212b;
`;
const Hold = styled.div`
  padding-left: 30px;
  margin-top: 18px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;
const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 8px;

  /* border: 3px solid #ac6dde; */
  border: 3px solid #eb72bb;
  margin-right: 5px;
`;
const Title = styled.div`
  color: white;
  margin-right: 20px;
  margin-left: 5px;
  text-transform: uppercase;
`;
const DateAndTime = styled.div`
  color: #c55456;
  margin-left: 40px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 60px;
  border-radius: 12px 12px 0px 0px;
  padding-left: 30px;
  background-color: rgb(39, 39, 50);
`;
const Icon = styled.div`
  margin-top: 3px;
  background-color: #eb72bb;
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
