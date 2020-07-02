import React from "react";
import "./style.css";

function List(props) {
  return (
    <div className="card text-center">
      <table>
        <tr>
          <th onClick={props.handleSort}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
        {props.employees.map((item) => (
          <tr key={item.name}>
            <td> {item.name} </td>
            <td> {item.phone} </td>
            <td> {item.email} </td>
            <td> {item.DOB} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default List;
