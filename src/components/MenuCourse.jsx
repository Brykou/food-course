import React from "react";
import PropTypes from "prop-types";
import MenuCard from "../containers/MenuCard";
import "./MenuCourse.css";

class MenuCourse extends React.Component {
  static propTypes = {
    dishes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        allery: PropTypes.arrayOf(PropTypes.string).isRequired,
        spiceLevel: PropTypes.number.isRequired
      })
    ).isRequired
  };

  render() {
    const { dishes } = this.props;
    return (
      <div className="menuCourse">
        {dishes.map((dish, index) => (
          <MenuCard key={index} {...dish} />
        ))}
      </div>
    );
  }
}

export default MenuCourse;
