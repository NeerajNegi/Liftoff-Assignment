import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Report from "./Report";

const ReportForm = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isReportVisible, setIsReportVisible] = useState(false);
  const [errors, setErrors] = useState({
    value: "",
    startDate: "",
    endDate: "",
    name: ""
  });

  const validate = () => {
    const updatedErrors = errors;
    if (!startDate) {
      updatedErrors.startDate = "Enter a start date";
    }
    if (!endDate) {
      updatedErrors.endDate = "Enter an end date";
    }
    if (new Date(startDate) > new Date(endDate)) {
      updatedErrors.startDate = "Start date should be before the end date";
    }
    if (!value || (+value < 1 && +value > 100)) {
      updatedErrors.value = "Enter a value between 1-100";
    }
    if (!name) {
      updatedErrors.name = "Enter a name";
    }
    if (
      updatedErrors.name ||
      updatedErrors.value ||
      updatedErrors.startDate ||
      updatedErrors.endDate
    ) {
      console.log(updatedErrors);
      setErrors(updatedErrors);
      console.log(errors);
      return false;
    }
    return true;
  };

  const submitForm = () => {
    if (validate()) {
      setIsReportVisible(true);
    }
  };

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="col">
            <TextField
              label="Name"
              required={true}
              value={name}
              onChange={e => {
                e.persist();
                setName(e.target.value);
              }}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="col">
            <TextField
              label="Value"
              required={true}
              value={value}
              onChange={e => {
                e.persist();
                setValue(e.target.value);
              }}
            />
            {!errors.value && (
              <small id="emailHelp" className="form-text text-muted">
                Between 1-100
              </small>
            )}
            {errors.value && <div className="error">errors.value</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <TextField
              label="Start Date"
              required={true}
              type="date"
              value={startDate}
              InputLabelProps={{
                shrink: true
              }}
              onChange={e => {
                e.persist();
                setStartDate(e.target.value);
              }}
            />
            {errors.startDate && (
              <div className="error">{errors.startDate}</div>
            )}
          </div>
          <div className="col">
            <TextField
              label="End Date"
              required={true}
              type="date"
              value={endDate}
              InputLabelProps={{
                shrink: true
              }}
              onChange={e => {
                e.persist();
                setEndDate(e.target.value);
              }}
            />
            {errors.endDate && <div className="error">{errors.endDate}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="col" />
          <div className="col">
            <Button
              variant="contained"
              color="primary"
              onClick={() => submitForm()}
            >
              Generate Report
            </Button>
          </div>
        </div>
      </form>
      {isReportVisible && (
        <Report
          name={name}
          value={value}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    </div>
  );
};

export default ReportForm;
