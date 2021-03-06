import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import HotIcon from "@material-ui/icons/Whatshot";
import CheckCircle from "@material-ui/icons/CheckCircle";
import "./MenuCard.css";

class MenuCard extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    allery: PropTypes.arrayOf(PropTypes.string).isRequired,
    spiceLevel: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  render() {
    const {
      id,
      title,
      image,
      description,
      allery,
      spiceLevel,
      isSelected,
      onSelect
    } = this.props;
    return (
      <Card className="menuCard" onClick={() => onSelect(id)}>
        <CardActionArea>
          <CardMedia image={image} title={title} className="menuImage" />
          <CardContent>
            <div>
              {[...Array(spiceLevel).keys()].map(index => (
                <HotIcon key={index} />
              ))}
            </div>
            <Typography gutterBottom variant="h6" component="h3">
              {title}
            </Typography>
            <Typography gutterBottom component="p">
              {description}
            </Typography>
            {allery.map((allergen, index) => (
              <Chip key={index} label={allergen} className="allergen" />
            ))}
          </CardContent>
        </CardActionArea>
        {!isSelected ? null : (
          <div className="overlay">
            <CheckCircle className="checkIcon" />
          </div>
        )}
      </Card>
    );
  }
}

export default MenuCard;
