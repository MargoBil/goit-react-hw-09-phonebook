import { lazy } from "react";

const contactsPage = {
  path: "/contacts",
  lable: "ContactsPage",
  exact: true,
  component: lazy(() =>
    import("../views/Contacts" /* webpackChunkName: "ContactsPage" */)
  ),
};

const signUpPage = {
  path: "/signUpView",
  lable: "SignUpPage",
  exact: true,
  component: lazy(() =>
    import("../views/SignUp" /* webpackChunkName: "SignUpPage" */)
  ),
};
const signInPage = {
  path: "/signInView",
  lable: "SignInPage",
  exact: true,
  component: lazy(() =>
    import("../views/SignIn" /* webpackChunkName: "SignInPage" */)
  ),
  restricted: true
};

export default { contactsPage, signUpPage, signInPage };
