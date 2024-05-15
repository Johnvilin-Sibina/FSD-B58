import React from "react";
import "./Home.css";
const Home = ({ data }) => {
  return (
    <div>
      <h1>Home</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th colSpan={5} className="text-center">
              Address
            </th>
            <th>Phone</th>
            <th>Website</th>
            <th colSpan={3} className="text-center">Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
            <th colSpan={2} className="text-center">
              Geo
            </th>
            <th>Name</th>
            <th>Catch Phrase</th>
            <th>BS</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>

          {data.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>{ele.address.street}</td>
                <td>{ele.address.suite}</td>
                <td>{ele.address.city}</td>
                <td>{ele.address.zipcode}</td>
                <td>{ele.address.geo.lat}</td>
                <td>{ele.address.geo.lng}</td>
                <td>{ele.phone}</td>
                <td>{ele.website}</td>
                <td>{ele.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
