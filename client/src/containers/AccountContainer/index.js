import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

import { userActions } from "../../redux/actions/userActions";
import AccountCard from "./components/AccountCard";
import { CenterBlock } from "./styled";
import { openNotification } from "../../utils";

class AccountContainer extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userActions.fetchAccount());
  }

  render() {
    const { account, pending, error } = this.props;

    let comp = <Spin tip="Подгружаем данные о пользователе..." />;
    if (!pending && !error) comp = <AccountCard user={account} />;

    return (
      <CenterBlock>
        {error ? openNotification("Возникла ошибка!", error) : comp}
      </CenterBlock>
    );
  }
}

const mapStateToProps = state => {
  const { account, pending, error } = state.fetchAccount;
  return {
    account,
    pending,
    error
  };
};

export default connect(mapStateToProps)(AccountContainer);
