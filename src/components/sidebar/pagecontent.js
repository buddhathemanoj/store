import Header from "../header/header"
import {  BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import routes from "../routes/sidebarcomponent";
import { Suspense, useEffect, useRef } from "react"
import SuspenseContent from "../containers/SuspenseContent";


function PageContent(){
    const mainContentRef = useRef(null);

    console.log("Routes:", routes);

    // Scroll back to top on new page load
    useEffect(() => {
        mainContentRef.current.scroll({
            top: 0,
            behavior: "smooth"
        });
      })

    return(
        <div className="drawer-content flex flex-col">
            <Header/>
            <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200" ref={mainContentRef}>
            <Suspense fallback={<SuspenseContent />}>
                        <Routes>
                            {
                                routes.map((route, key) => {
                                    return(
                                        <Route
                                            key={key}
                                            exact={true}
                                            path={`${route.path}`}
                                            element={<route.component />}
                                        />
                                    )
                                })
                            }
                        </Routes>
                        </Suspense>
                <div className="h-16"></div>
            </main>
        </div> 
    )
}


export default PageContent