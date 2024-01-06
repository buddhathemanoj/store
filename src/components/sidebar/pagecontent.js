import React, { useRef, useEffect } from 'react';
import Header from '../header/header';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import routes from '../routes/sidebarcomponent';
import { Suspense } from 'react';
import SuspenseContent from '../containers/SuspenseContent';
import LeftSidebar from '../sidebar/sidebar';
import Homepage from '../homepage/Homepage';

const withPageContent = (WrappedComponent) => {
  return function WithPageContent(props) {
    const mainContentRef = useRef(null);
    const location = useLocation();

    // Scroll back to top on new page load
    useEffect(() => {
      mainContentRef.current.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }, [location.pathname]);

    return (
      <div className="drawer-content flex flex-row drawer lg:drawer-open">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <Header />
        <LeftSidebar />
        <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200" ref={mainContentRef}>
          <Suspense fallback={<SuspenseContent />}>
            <Routes>
              {routes.map((route, key) => (
                <Route key={key} exact={true} path={`${route.path}`} element={<route.component />} />
              ))}
            </Routes>
          </Suspense>
          {/* Render the wrapped component with additional props */}
          <Homepage />
        </main>
      </div>
    );
  };
};

// Wrap your component using the withPageContent HOC
const PageContentWithHOC = withPageContent(() => null); // You can replace `() => null` with the actual component you want to include.

export default PageContentWithHOC;
