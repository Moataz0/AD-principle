import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./style.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { IconInput, Button, Label, IconLabel } from "../../";
const Header = ({ type }) => {
  const [destination, setDistination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 2,
  });
  const [openOptions, setOpenOptions] = useState(false);

  const handleOption = (name, op) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: op === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "List" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <IconLabel icon={faBed} text="Stays" />
          </div>
          <div className="headerListItem">
            <IconLabel icon={faPlane} text="Flights" />
          </div>
          <div className="headerListItem">
            <IconLabel icon={faCar} text="Car rentals" />
          </div>
          <div className="headerListItem">
            <IconLabel icon={faBed} text="Attraction" />
          </div>

          <div className="headerListItem">
            <IconLabel icon={faTaxi} text="Airport taxis" />
          </div>
        </div>
        {type !== "List" && (
          <>
            <h1 className="headerTitle">Find your next stay</h1>
            <p className="headerDesc">
              Search deals on hotels, homes, and much more...
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <IconInput
                iconStyle="headerIcon"
                icon={faBed}
                type="text"
                placeholder="Where are you going"
                className="headerSearchInput"
                onChange={(e) => setDistination(e.target.value)}
              />

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                    setOpenOptions(false);
                  }}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    minDate={new Date()}
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpenDate(false);
                  }}
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <Label className="optionText" text="Adult" />
                      <div className="optionCounter">
                        <Button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                          text="-"
                        />
                        <Label
                          className="optionCounterNumber"
                          text={options.adult}
                        />

                        <Button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                          text="+"
                        />
                      </div>
                    </div>

                    <div className="optionItem">
                      <Label className="optionText" text="children" />
                      <div className="optionCounter">
                        <Button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                          text="-"
                        />
                        <Label
                          className="optionCounterNumber"
                          text={options.children}
                        />

                        <Button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                          text="+"
                        />
                      </div>
                    </div>

                    <div className="optionItem">
                      <Label className="optionText" text="room" />
                      <div className="optionCounter">
                        <Button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                          text="-"
                        />
                        <Label
                          className="optionCounterNumber"
                          text={options.room}
                        />

                        <Button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                          text="+"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <Button
                  className="headerBtnSearch"
                  onClick={handleSearch}
                  text="Search"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
