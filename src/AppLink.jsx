import React from "react";
import { NavLink } from "react-router-dom";

const AppLink = () => {
  return (
    <>
      <NavLink
        to={"/student"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Student
      </NavLink>
      <NavLink
        to={"/student/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Student
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/product"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Product
      </NavLink>
      <NavLink
        to={"/product/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Product
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/book"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Book
      </NavLink>
      <NavLink
        to={"/book/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Book
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/bike"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Bike
      </NavLink>
      <NavLink
        to={"/bike/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Bike
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/classroom"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Classroom
      </NavLink>
      <NavLink
        to={"/classroom/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Classroom
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/college"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        College
      </NavLink>
      <NavLink
        to={"/college/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create College
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/department"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Department
      </NavLink>
      <NavLink
        to={"/department/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Department
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/teacher"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Teacher
      </NavLink>
      <NavLink
        to={"/teacher/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Teacher
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/trainee"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Trainee
      </NavLink>
      <NavLink
        to={"/trainee/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create Trainee
      </NavLink>
      <br /> <br />
      <NavLink
        to={"/webUser"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        WebUser
      </NavLink>
      <NavLink
        to={"/webUser/create"}
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        Create WebUser
      </NavLink>
      <br /> <br />
    </>
  );
};

export default AppLink;
