import React from "react";
import { Helmet } from "react-helmet";
import SkipToContent from "../A11y/SkipToContent";

function Layout({ page = "Home", children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Maywashroom - ${page}`}</title>
        <meta
          name="title"
          content="Maywashroom — A laundry mart"
        />
        <meta
          name="description"
          content="MayWashroom is an effective laundry service you can trust. Your goods are in a save hand"
        ></meta>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <SkipToContent content="main"></SkipToContent>
      {children}
    </React.Fragment>
  );
}

export default Layout;
