import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { RouterProvider } from "react-router";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import SignUp from "./components/custom/SignUp";
import Login from "./components/custom/Login";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/TermsOfServices";
import ContactFormPage from "./pages/ContactFormPage";
// import AddToCart from "./components/custom/AddToCart";
import NotFount from "./components/custom/NotFount";
import AdminDashboardNavbar from "./components/custom/AdminDashboardNavbar";
import CreateBanquet from "./components/custom/CreateBanquet";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <SignUp />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <NotFount />
        </>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <>
          <Navbar />
          <AboutUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/privacypolicy",
      element: (
        <>
          <Navbar />
          <PrivacyPolicy />
          <Footer />
        </>
      ),
    },
    {
      path: "/termsofservices",
      element: (
        <>
          <Navbar />
          <TermsOfServices />
          <Footer />
        </>
      ),
    },
    {
      path: "/contactformpage",
      element: (
        <>
          <Navbar />
          <ContactFormPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/admin/dashboard",
      element: (
        <>
          <AdminDashboardNavbar />
          <CreateBanquet />
        </>
      ),
    },
    {
      path: "/admin/dashboard/createbanquet",
      element: (
        <>
          <AdminDashboardNavbar />
          <CreateBanquet />
        </>
      ),
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};

export default App;
