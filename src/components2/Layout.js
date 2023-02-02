import { Link, NavLink, Outlet } from 'react-router-dom';

const activeStyle = ({ isActive }) => ({
  color: isActive ? 'green' : '',
  fontSize: isActive ? '2rem' : '',
});

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a href='/'>Home</a>와 기능은 비슷하지만 다르다. */}
            {/* Link로 작성시 style을 이용할 수 없다. */}
            {/* 선택한 컴포넌트에 스타일 지정이 가능하다. */}
            <NavLink to='/' style={activeStyle}>
              Home
            </NavLink>
          </li>

          <li>
            {/* <a>요소는 전체를 모두 렌더링하므로 <Link> 또는 <NavLink>를 사용한다. */}
            {/* <a href='/dashboard'>Dashboard</a> */}
            <NavLink to='/dashboard' style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to='/nothing-here' style={activeStyle}>
              Nothing Here
            </NavLink>
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
