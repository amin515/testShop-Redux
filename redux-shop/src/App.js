import { RouterProvider } from "react-router-dom";
import "./App.css";
import publicRoute from "./routes/publicRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBrand } from "./redux/reduxAction/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
    
  }, [dispatch]);

  return (
    <>
      {" "}
      <RouterProvider router={publicRoute} />{" "}
    </>
  );
}

export default App;
