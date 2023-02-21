import OurTenSteps from "@/ourtensteps";
import OurPlans from "@/ourplans";
import OurMenus from "@/ourmenus";
import { FC } from "react";
import Home from "@/home";
import AboutUs from "@/aboutus";
import TermsAndConditions from "@/termsAndConditions";
import { Route, Routes } from "react-router-dom";
import Signin from "@/signin";
import Signup from "@/signup";

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/ourmenus" element={<OurMenus />} />
      <Route path="/ourplans" element={<OurPlans />} />
      <Route path="/ourtensteps" element={<OurTenSteps />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
