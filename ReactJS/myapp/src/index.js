import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Display() {
  return (
    <>
      <h3>This Tag from Display Function</h3>
      <p>lorem 2</p>
    </>
  );
}

function Separator(props) {
  let temp = "";
  for (let i = 0; i < props.count; i++) {
    temp += props.by;
  }
  return <h1>{temp}</h1>;
}

const students = [
  {
    name: "Nilesh Gambhava",
    rollno: 1,
    spi: 6.9,
    image:
      "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
  },
  {
    name: "Rupesh Vaishnav",
    rollno: 2,
    spi: 7.1,
    image:
      "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/10---28-04-2023-02-07-03.jpg",
  },
  {
    name: "Arjun Bala",
    rollno: 3,
    spi: 10.1,
    image:
      "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
  },
];

const ans = students.map((stu) => (
  <div className="col-md-4 col-sm-6 mb-4 mt-2" key={stu.rollno}>
    <div className="card" style={{ width: "100%" }}>
      <img src={stu.image} className="card-img-top" alt={stu.name} />
      <div className="card-body">
        <h5 className="card-title">Name: {stu.name}</h5>
        <h5 className="card-title">RollNo: {stu.rollno}</h5>
        <h5 className="card-title">Spi: {stu.spi}</h5>
      </div>
    </div>
  </div>
));

root.render(
  <>
    <div className="container mt-3">
      <Navbar title="Darshan Logo" />
      <div className="row">{ans}</div>
    </div>
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-primary">Next</button>
    </div>
  </>
);