import React from 'react';
import LeftSidebar from './sidebar';
import Header from '../header/header';
const withLayout = (ContentComponent) => {
  return (props) => {
    return (
      <div >
        <div className=" drawer lg:drawer-open flex">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
       
        <LeftSidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Include the Header component */}
          <Header />

          {/* ContentComponent is passed as a prop and rendered */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto  w-full mt-5 ">
            <ContentComponent {...props} />
          </main>
        </div>
      </div>
      </div>
    );
  };
};

export default withLayout;
