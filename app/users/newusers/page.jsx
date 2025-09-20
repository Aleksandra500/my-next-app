import React from "react";
import Clock from "@/app/components/Clock";

async function getUser() {
  const res = await fetch("http://localhost:3000/api/newusers");
  return res.json();
}

async function NewUser() {
  const users = await getUser();

  return (
    <div>
      <h1>Lista korisnika</h1>
      <Clock />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewUser;
