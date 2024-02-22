import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";

/**
 * Planning of foodEz App:
 *   Header
 *    -Logo
 *    -Nav Items
 *   Body
 *    -Search
 *    -RestaurantContainer
 *     -ReastaurantCard
 *      -Image
 *      -Name of res, rating, cuisine, delivery time
 *   Footer
 *     -copyright
 *     -Links
 *     -Address
 *     -contact
 * */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
