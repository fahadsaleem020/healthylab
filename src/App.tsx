import OurTenSteps from "@/ourtensteps";
import OurPlans from "@/ourplans";
import OurMenus from "@/ourmenus";
import { FC, useState } from "react";
import Home from "@/home";
import AboutUs from "@/aboutus";
import TermsAndConditions from "@/termsAndConditions";
import { Route, Routes, useParams } from "react-router-dom";
import Signin from "@/signin";
import Signup from "@/signup";
import Tracking from "@/tracking";
import Details from "@/details";
import Selection from "@/selection"; 
import Choose from "@/choose";
import Results from "@/result";
import Checkout from "@/checkout";

function ProfilePage() {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
}
const App: FC = () => {
  return (
    <Routes> 
      <Route index element={<Home />} />
      <Route path="/ourmenus/:id" element={<OurMenus />} /> 
      <Route path="/ourmenus" element={<OurMenus />} /> 
      <Route path="/ourplans" element={<OurPlans />} />
      <Route path="/ourtensteps" element={<OurTenSteps />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/details" element={<Details />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/choose" element={<Choose />} />
      <Route path="/results" element={<Results />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;
