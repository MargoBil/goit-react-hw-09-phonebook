import React from "react";
import { connect } from "react-redux";
import selectors from "../../redux/selectors/authSelectors";
import operations from '../../redux/actions/authOperations';

const UserProfile = ({ name, onLogout }) => (
  <div>
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      SignOut
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: selectors.getCurrentUserName(state),
});

const mapDispatchToProps = ({
  onLogout: operations.logOut
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
