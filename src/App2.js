// v6

import { Route, Routes } from 'react-router-dom';
import About from './components2/About';
import Dashboard from './components2/Dashboard';
import Home from './components2/Home';
import Layout from './components2/Layout';
import NoMatch from './components2/NoMatch';

// npm install react-router-dom
const App = () => {
  return (
    <div>
      <h1> Basic Example</h1>
      {/* 
       
      */}
      <Routes>
        {/* <Route>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route> */}

        {/* Index Routes
          - Route 에 들어가는 index 라는 값은 default child routes 라고 생각하면 된다.
          - 부모에 여러 개의 자식 route 있는 경우 부모 경로에서 + '/' 인 경우 설정
          - v6 부터는 네스팅이 되기 때문에 현재까지의 경로 + '/' 를 한 path 에 연결할 component 간편하게 설정하기 위해 나온 명령어 이다.
          - index route 는 모든 레벨에서 사용 가능하다 */}

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
