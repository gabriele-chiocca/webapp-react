import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to={'/'} className="navbar-brand mx-4">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to={'/'} className="nav-link">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="container">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
}
