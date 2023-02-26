import { useEffect } from "react";
import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useCookies, CookiesProvider } from "react-cookie";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";
import Cookies from "js-cookie";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

// Import components
import Header from "../../Components/Header";
import Side from "../../Components/Side";

// Import page
import LoginPage from "../Login";
import Dashboard from "../Dashboard";
import News from "../News";
import NewsAdd from "../News/Add";
import NewsEdit from "../News/Edit";
import NewsCategories from "../News/News_categories";

// news comments
import NewsComments from "../Newscomment";

//User
import User from "../Users";
import UserAdd from "../Users/Add";
import UserEdit from "../Users/Edit";

// Websettings
import WebSettings from "../WebSettings";
import Socials from "../WebSettings/socials";
import AdsBanner from "../WebSettings/ads";
import AdsBannerAdd from "../WebSettings/ads/Add";
import AdsBannerEdit from "../WebSettings/ads/Edit";
import Menus from "../Menus";
import FooterMenu from "../Menus/footer";
import Logout from "../Logout";

// Actions
import { tokenCheck } from "../../redux/actions/tokenActions";

function App(props) {
  const validateMessages = {
    required: "Заавал бөглөнө үү!",
  };

  const [cookies] = useCookies(["daynews", "language"]);

  useEffect(() => {
    if (cookies.daynews) {
      const token = cookies.daynews;
      props.checkToken(token);
    }
  }, cookies);

  useEffect(() => {
    if (props.tokenError) {
      Cookies.remove("daynews");
      document.location.href = "/login";
    }
  }, props.tokenError);

  return (
    <>
      {cookies.daynews ? (
        <ConfigProvider form={{ validateMessages }}>
          <CookiesProvider>
            <Header />
            <Side />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path={"/news/edit/:id"} component={NewsEdit} />
              <Route path="/news/add" component={NewsAdd} />
              <Route path="/news" exact component={News} />
              // News comments
              <Route path="/newscomments" exact component={NewsComments} />
              //users
              <Route path="/users/add" exact component={UserAdd} />
              <Route path="/users/edit/:id" exact component={UserEdit} />
              <Route path="/users" exact component={User} />
              // Websettings
              <Route path="/menus" exact component={Menus} />
              <Route path="/menus/footer" exact component={FooterMenu} />
              <Route
                path="/web_settings/adsbanners/add"
                exact
                component={AdsBannerAdd}
              />
              <Route
                path="/web_settings/adsbanners/edit/:id"
                exact
                component={AdsBannerEdit}
              />
              <Route
                path="/web_settings/adsbanners"
                exact
                component={AdsBanner}
              />
              <Route path="/web_settings/socials" exact component={Socials} />
              <Route path="/web_settings" exact component={WebSettings} />
              //
              <Route path="/news/categories" exact component={NewsCategories} />
              <Route path="/logout" component={Logout} />
              <Redirect to="/" />
            </Switch>
          </CookiesProvider>
        </ConfigProvider>
      ) : (
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tokenError: state.tokenReducer.error,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    checkToken: (token) => dispatch(tokenCheck(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(App);
