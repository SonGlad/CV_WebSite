import { SharedLayout } from "./SharedLayout";
import { Route, Routes} from "react-router-dom";
// import { lazy, useEffect } from "react";
// import { useDispatch} from "react-redux";
// import { PrivateRoute } from "./PrivateRoute";
// import { RestrictedRoute } from "./RestrictedRoute";


export const App= () => {
  return (
    <>
    <Routes>
      <Route parth='/' element = {<SharedLayout/>}>

      </Route>    
    </Routes>
    </>
  );
};
