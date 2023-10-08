import "./App.css";
import CustomNavbar from "./routes/customNavbar/customNavbar.component";
import ViewBucket from "./routes/viewBucket/viewBucket.component";
import AddBucket from "./routes/addBucket/addBucket.component";
import { Route, Routes } from "react-router-dom";

function App() {
  const SignIn = () => (<>SignInHere</>)
  const AddBucker = () => (<>AddBucketHere</>)
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<CustomNavbar />}>
        <Route index element={<ViewBucket />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addbucket" element={<AddBucker/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
