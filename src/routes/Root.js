import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar" className="hide-mobile">
          <div >
          <h1>React Router Contacts</h1>
            {/* <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form> */}
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/contacts/1`}>Jesus Christ</Link>
              </li>
              <li>
                <Link to={`/contacts/2`}>Chuck Norris</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }