import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
import axios from "axios";

import { openNotification } from "../../../utils/index";
import { userActions } from "../../../redux/actions";
import { notificationConstants } from "../../../utils/";

const { Option } = Select;

const MarkDropDown = ({ mark, subjectName, className, fetchJournal }) => {
  function handleChange(value) {
    const token = localStorage.getItem("token");
    if (typeof mark["id"] === "undefined") {
      const newMark = {
        value: value,
        date: mark.date,
        subject_id: mark.subject_id,
        student_id: mark.student_id
      };

      axios
        .post(`http://localhost:8000/api/journal/marks/`, newMark, {
          headers: { Authorization: `Token ${token}` }
        })
        .then(res => {
          fetchJournal(className, subjectName);
        })
        .catch(err => {
          openNotification(...notificationConstants.UNKNOWN_ERROR);
        });
    } else {
      axios
        .patch(
          `http://localhost:8000/api/journal/marks/${mark.id}/`,
          { value: value },
          { headers: { Authorization: `Token ${token}` } }
        )
        .then(res => {
          fetchJournal(className, subjectName);
        })
        .catch(err => {
          openNotification(...notificationConstants.UNKNOWN_ERROR);
        });
    }
  }

  return (
    <Select
      defaultValue={mark.value}
      style={{ width: 70 }}
      onChange={handleChange}
    >
      <Option value="PRE">
        <span role="img" aria-label="check">
          ✔
        </span>
        ️
      </Option>
      <Option value="ABS">
        <span role="img" aria-label="cross">
          ❌
        </span>
      </Option>
      <Option value="FIV">5</Option>
      <Option value="FOU">4</Option>
      <Option value="THR">3</Option>
      <Option value="TWO">2</Option>
    </Select>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchJournal: (subjectName, className) =>
      dispatch(userActions.fetchJournal(subjectName, className))
  };
};

const mapStateToProps = state => {
  const { subjectName } = state.selectHeader;
  const { className } = state.selectSubHeader;
  return {
    subjectName,
    className
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MarkDropDown);
