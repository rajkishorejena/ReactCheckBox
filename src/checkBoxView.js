import React, { useEffect, useReducer, useState } from "react";
import { Checkbox } from "semantic-ui-react";
const userData = [
  { email: "rajkishore@gmail.com" },
  { email: "kumar123@gmail.com" },
  { email: "example1@gmail.com" },
  { email: "checkBox@gmail.com" },
];

const CheckBokView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setUsers(result))
      .catch((err) => {
        console.log("Error Message:", err);
      });
    // setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      const tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    }else if(name === "selectItem"){
        console.log("selectItem")
        const select = []
        let test;
          for(let i=0;i<users.length;i++){
                  if(i<5){
                    test = {...users[i],isChecked:checked}     
                    select.push(test);   
                  }else{
                    test = {...users[i]}     
                    select.push(test);   
                  }
       
          }
          
          console.log(select);
          setUsers(select)
    } else {
      const tempUser = users.map((user) =>
        user.email === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div>
      <h1>CheckBox Example</h1>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Checkbox
          label="Select All"
          name="allSelect"
          checked={users.filter((user) => user?.isChecked !== true).length < 1}
          onChange={handleChange}
          style={{margin:"10px"}}
        />
        <Checkbox
          label="Select First 5"
          name="selectItem"
          onChange={handleChange}
        //   checked={users.slice(0,5).filter((user)=>user?.isChecked !== true).length<1}
        />
      </div>
      <br />
      {users.map((user) => (
        <div>
          <Checkbox
         //    key={user.id}
            label={user.email}
            name={user.email}
            checked={user?.isChecked || false}
            onChange={handleChange}
            style={{ margin: "15px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckBokView;
