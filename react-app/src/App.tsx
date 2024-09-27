import React, { Suspense } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import Counter from "./components/HOC/Counter";
import ListGroup from "./components/ListGroup";
import Memo from "./components/Memo";
import StrictMode from "./components/StrictMode";
import "./App.css";
const UnderstandLazyLoading = React.lazy(
  () => import("./components/LazyLoading")
);
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import UnderstandingCallback from "./components/callback/UnderstandingCallback";
import UnderstandingRef from "./components/UnderstandingRef";
import { Provider } from "react-redux";
import store from "./components/reduxtoolkit/store";
import ReducerProfile from "./components/reduxtoolkit/ReducerProfile";
import UnderstandingPortal from "./components/createPortal";
import Post from "./components/useReducerHooks/post";

function App() {
  const items = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore"];
  const handleSelectItem = (name: string) => {
    console.log(name);
  };

  return (
    <Provider store={store}>
      <Router>
        <nav>
          <button type="button" className="btn btn-dark">
            <Link to="/">Home</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/profile/:userName">Profile</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/memo">Memo</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/strictmode">Strict Mode</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/counter">HOC</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/list">List</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/lazyloading">Lazy Loading</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/callback">Callback</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/ref">Ref</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/redux">Redux</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/react-dom">React-DOM</Link>
          </button>
          <button type="button" className="btn btn-dark">
            <Link to="/reducer">Reducer</Link>
          </button>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Alert>
                Hello <span>World !!</span>
              </Alert>
            }
          />
          <Route path="/memo" element={<Memo />} />
          <Route path="/strictmode" element={<StrictMode />} />
          <Route path="/profile/:userName" element={<Profile />} />
          <Route path="/callback" element={<UnderstandingCallback />} />
          <Route path="/redux" element={<ReducerProfile />} />
          <Route path="/react-dom" element={<UnderstandingPortal />} />
          <Route
            path="/list"
            element={
              <ListGroup
                items={items}
                heading="List"
                onSelectItem={handleSelectItem}
              />
            }
          />
          {/* @ts-ignore */}
          <Route path="/counter" element={<Counter initialCount={1} />} />
          <Route
            path="/lazyLoading"
            element={
              <Suspense fallback="Loading...">
                <UnderstandLazyLoading />
              </Suspense>
            }
          />
          <Route path="/ref" element={<UnderstandingRef />} />
          <Route path="/reducer" element={<Post />} />
          <Route path="*" element={<Message />} />
        </Routes>
      </Router>
      <div id="footer">copyright @ self-learning.com</div>
    </Provider>
  );
}

export default App;
