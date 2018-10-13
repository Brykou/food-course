import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HotIcon from "@material-ui/icons/Whatshot";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

class Summary extends React.Component {
  static propTypes = {
    orderList: PropTypes.array.isRequired
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { orderList } = this.props;
    const allergens = [];
    orderList.forEach(order => {
      order.allery.forEach(allergen => {
        if (!allergens.includes(allergen)) {
          allergens.push(allergen);
        }
      });
    });

    return (
      <div>
        <h1> Here is your order</h1>
        {allergens.map(allergen => (
          <Chip key={allergen} label={allergen} className="allergen" />
        ))}
        <List>
          {orderList.map(order => (
            <ListItem key={order.id} dense divider>
              <Avatar src={order.image} />
              <ListItemText primary={order.title} />

              {[...Array(order.spiceLevel).keys()].map(index => (
                <ListItemIcon key={index}>
                  <HotIcon />
                </ListItemIcon>
              ))}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Summary;
