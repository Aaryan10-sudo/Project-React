import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home";
import ReadAllStudent from "../student/ReadAllStudent";
import CreateStudent from "../student/CreateStudent";
import ReadAllProduct from "../product/ReadAllProduct";
import CreateProduct from "../product/CreateProduct";
import ReadAllBike from "../bike/ReadAllBike";
import CreateBike from "../bike/CreateBike";
import ReadAllBook from "../book/ReadAllBook";
import CreateBook from "../book/CreateBook";
import ReadAllClassroom from "../classroom/ReadAllClassroom";
import CreateClassroom from "../classroom/CreateClassroom";
import ReadAllCollege from "../college/ReadAllCollege";
import CreateCollege from "../college/CreateCollege";
import ReadAllDeaprtment from "../department/ReadAllDeaprtment";
import CreateDepartment from "../department/CreateDepartment";
import ReadAllTeacher from "../teacher/ReadAllTeacher";
import CreateTeacher from "../teacher/CreateTeacher";
import ReadAllTrainee from "../trainee/ReadAllTrainee";
import CreateTrainee from "../trainee/CreateTrainee";
import ReadAllWebUser from "../webUser/ReadAllWebUser";
import CreateWebUser from "../webUser/CreateWebUser";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          {/* For Student : /student */}
          <Route path="student" element={<Outlet />}>
            <Route index element={<ReadAllStudent />}></Route>
            <Route path="create" element={<CreateStudent />}></Route>
          </Route>
          {/* For Product : /product */}
          <Route path="product" element={<Outlet />}>
            <Route index element={<ReadAllProduct />}></Route>
            <Route path="create" element={<CreateProduct />}></Route>
          </Route>
          {/* For Bike : /bike */}
          <Route path="bike" element={<Outlet />}>
            <Route index element={<ReadAllBike />}></Route>
            <Route path="create" element={<CreateBike />}></Route>
          </Route>
          {/* For Book : /book */}
          <Route path="book" element={<Outlet />}>
            <Route index element={<ReadAllBook />}></Route>
            <Route path="create" element={<CreateBook />}></Route>
          </Route>
          {/* For classroom : /classroom*/}
          <Route path="classroom" element={<Outlet />}>
            <Route index element={<ReadAllClassroom />}></Route>
            <Route path="create" element={<CreateClassroom />}></Route>
          </Route>
          {/* For Book : /college*/}
          <Route path="college" element={<Outlet />}>
            <Route index element={<ReadAllCollege />}></Route>
            <Route path="create" element={<CreateCollege />}></Route>
          </Route>
          {/* For Book : /department */}
          <Route path="department" element={<Outlet />}>
            <Route index element={<ReadAllDeaprtment />}></Route>
            <Route path="create" element={<CreateDepartment />}></Route>
          </Route>
          {/* For Book : /teacher */}
          <Route path="teacher" element={<Outlet />}>
            <Route index element={<ReadAllTeacher />}></Route>
            <Route path="create" element={<CreateTeacher />}></Route>
          </Route>
          {/* For Book : /trainee */}
          <Route path="trainee" element={<Outlet />}>
            <Route index element={<ReadAllTrainee />}></Route>
            <Route path="create" element={<CreateTrainee />}></Route>
          </Route>
          {/* For Book : /webUser */}
          <Route path="webUser" element={<Outlet />}>
            <Route index element={<ReadAllWebUser />}></Route>
            <Route path="create" element={<CreateWebUser />}></Route>
          </Route>
          {/* For Book : /book */}
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
