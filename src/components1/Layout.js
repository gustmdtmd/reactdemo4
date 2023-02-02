import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a href='/'>Home</a>와 비슷하지만 다르다. */}
            <Link to='/'>Home</Link>
          </li>

          <li>
            {/* <a>요소는 전체를 모두 렌더링하므로 <Link> 또는 <NavLink>를 사용한다. */}
            {/* <a href='/dashboard'>Dashboard</a> */}
            <Link to='/dashboard'>Dashboard</Link>
          </li>

          <li>
            <Link to='/nothing-here'>Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      {/* 같은 path로 설정되어 있는 element를 출력할 수 있는 공간 */}
      <Outlet />
    </div>
  );
};

export default Layout;
