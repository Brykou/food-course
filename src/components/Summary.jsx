import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HotIcon from "@material-ui/icons/Whatshot";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import "./Summary.css";

class Summary extends React.Component {
  static propTypes = {
    orderList: PropTypes.array.isRequired
  };

  render() {
    const { orderList } = this.props;
    return (
      <React.Fragment>
        <h1> Here is your order</h1>
        <List>
          {orderList.map(order => (
            <ListItem key={order.id} dense button>
              <Avatar src={order.image} />
              <ListItemText primary={order.title} />
              <ListItemIcon>
                {[...Array(order.spiceLevel).keys()].map(index => (
                  <HotIcon key={index} />
                ))}
                <HotIcon />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </React.Fragment>
    );
  }
}

export default Summary;
