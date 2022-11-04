import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 15;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <LoadingBar color="#f11946" progress={progress} />
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <NewsComponent
              changeProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <NewsComponent
              changeProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <NewsComponent
              changeProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <NewsComponent
              changeProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <NewsComponent
              changeProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <NewsComponent
              changeProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <NewsComponent
              changeProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
