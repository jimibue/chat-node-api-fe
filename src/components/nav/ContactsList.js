import React from "react";
import contacts from "../../data";
import { Link } from "react-router-dom";

export default function ContactsList() {
  return (
    <ul>
      {contacts.map((c) => {
        return (
          <li key={c.id}>
            <Link to={`/contacts/${c.id}`}>
              {c.first} {c.last}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// <div >
// <h1>React Router Contacts</h1>
//   {/* <form id="search-form" role="search">
//     <input
//       id="q"
//       aria-label="Search contacts"
//       placeholder="Search"
//       type="search"
//       name="q"
//     />
//     <div
//       id="search-spinner"
//       aria-hidden
//       hidden={true}
//     />
//     <div
//       className="sr-only"
//       aria-live="polite"
//     ></div>
//   </form>
//   <form method="post">
//     <button type="submit">New</button>
//   </form> */}
// </div>
// <nav>
//   <ContactsList />
// </nav>
