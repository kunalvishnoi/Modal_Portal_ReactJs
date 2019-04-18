import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";
import { setScroll, getScroll } from "./scrollPage";

class Routing extends Component {
  getValue = () => {
    setScroll(window.pageYOffset);
  };
  componentDidMount() {
    let scrollValue = getScroll();
    window.scrollTo(0, scrollValue);
  }

  render() {
    const person = [
      {
        id: 1,
        name: "kunal",
        age: 20
      },
      {
        id: 2,
        name: "misaki",
        age: 21
      },
      {
        id: 3,
        name: "khare",
        age: 20
      },
      {
        id: 4,
        name: "rohit",
        age: 21
      },
      {
        id: 5,
        name: "rohit chandra",
        age: 20
      },
      {
        id: 6,
        name: "rahul",
        age: 21
      },
      {
        id: 7,
        name: "abhishek",
        age: 20
      },
      {
        id: 8,
        name: "Vasu",
        age: 21
      }
    ];
    const styles = {
      color: "black",
      fontSize: "24px",
      textDecoration: "none"
    };

    return (
      <div>
        {person.map(data => {
          return (
            <div key={data.id}>
              <NavLink
                onClick={this.getValue}
                style={styles}
                to={`/person/${data.name}`}
              >
                Name: {data.name}
              </NavLink>
              <h4>Age {data.age}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Routing;
