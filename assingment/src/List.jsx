import React, { useState } from "react";
import PropTypes from "prop-types";

// Single List Item
const SingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "red" : "green" }}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

SingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    console.log(" index : " + index);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={handleClick}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
          key={index}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

List.defaultProps = {
  items: [{ text: "Item1" }, { text: "Item2" }],
};

export default List;