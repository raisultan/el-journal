import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

import TimeTableCard from "./components/TimeTableCard";
import { TimeTableCardsWrapper, StyledCentererWrapper } from "./styled";
import { userActions } from "../../redux/actions/userActions";
import {
  compareLessonNumbers,
  sortTimeTable,
  openNotification
} from "../../utils";

class TimetableContainer extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userActions.fetchTimeTable());
  }

  render() {
    const { timetable, pending, error } = this.props;

    const notifyError = err => {
      openNotification("Возникла ошибка!", err);
    };

    let comp = null;
    if (timetable.length > 0) {
      const sortedTimeTable = sortTimeTable(timetable, compareLessonNumbers);
      const cards = sortedTimeTable.map(d => {
        return (
          <TimeTableCard
            key={d.day_of_week}
            day_of_week={d.day_of_week}
            lessons={d.lessons}
            class_name={d.class_name}
          />
        );
      });
      comp = <TimeTableCardsWrapper>{cards}</TimeTableCardsWrapper>;
    } else if (pending) {
      comp = (
        <StyledCentererWrapper>
          <Spin tip="Подгружаем расписание..." />
        </StyledCentererWrapper>
      );
    }

    return <>{error ? notifyError(error) : comp}</>;
  }
}

const mapStateToProps = state => {
  const { timetable, pending, error } = state.fetchTimeTable;
  return {
    timetable,
    pending,
    error
  };
};

export default connect(mapStateToProps)(TimetableContainer);
