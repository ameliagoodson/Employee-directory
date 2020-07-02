import React from "react";
import "./style.css";

function List(props) {
  return (
    <div className="card text-center">
      <table>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>

        <td>
          {props.employees.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </td>
        {props.employees.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.phone}
          </li>
        ))}
        <td>
          {props.employees.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.email}
            </li>
          ))}
        </td>
        <td>
          {props.employees.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.DOB}
            </li>
          ))}
        </td>
      </table>
    </div>
  );
}

export default List;
