import React, { useState } from "react";
import {
  MControls,
  Menu,
  Btn,
  ControlsMenu,
  Title,
  Season,
  Margin,
  Input,
} from "./styles";
import gear from "../../assets/images/gear.png";

const MapControl = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleOnChange = (e) => {
    const value = e.target.value;
    console.log(value);
  }

  return (
    <>
      <Menu>
        {toggleMenu ? (
          <Btn>
            <img
              alt="menu"
              src={gear}
              width="20px"
              onClick={() => setToggleMenu(false)}
            />
          </Btn>
        ) : (
          <Btn>
            <img
              alt="menu"
              src={gear}
              width="20px"
              onClick={() => setToggleMenu(true)}
            />
          </Btn>
        )}
        {toggleMenu && (
          <ControlsMenu>
            <div>
              <Title>View by season</Title>
              <div>
                <Season>Show All</Season>
                <Season>2020</Season>
                <Season>2019</Season>
                <Season>2018</Season>
              </div>
            </div>
            <Margin />
            <div>
              <Title>Search by name</Title>
              <form>
              <Input placeholder="Search Hurricane..."/>
              </form>
            </div>
            <Margin />
            <div>
              <Title>Search by date</Title>
              <form action="">
              <Input type="month" />
              </form>
            </div>
          </ControlsMenu>
        )}
      </Menu>
      <MControls>
        <div>
          <div>
            <Title>View by season</Title>
            <div>
              <Season>Show All</Season>
              <Season>2020</Season>
              <Season>2019</Season>
              <Season>2018</Season>
            </div>
          </div>
          <Margin />
          <div>
            <Title>Search by name</Title>
            <form>
              <Input placeholder="Search Hurricane..." onChange={(e) => handleOnChange(e)}/>
            </form>
          </div>
          <Margin />
          <div>
            <Title>Search by date</Title>
            <form action="">
              <Input type="month" />
            </form>
          </div>
        </div>
      </MControls>
    </>
  );
};

export default MapControl;
