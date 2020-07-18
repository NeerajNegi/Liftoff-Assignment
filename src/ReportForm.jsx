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
    const updatedErrors = { ...errors };
    let isError = false;
    if (!startDate) {
      updatedErrors.startDate = "Enter a start date";
      isError = true;
    }
    if (!endDate) {
      updatedErrors.endDate = "Enter an end date";
      isError = true;
    }
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();
    if (startDateTime >= endDateTime) {
      updatedErrors.startDate = "Start date should be before the end date";
      isError = true;
    }
    if (!+value || (+value < 1 || +value > 100)) {
      updatedErrors.value = "Enter a value between 1-100";
      isError = true;
    }
    if (!name) {
      updatedErrors.name = "Enter a name";
      isError = true;
    }
    if (isError) {
      setErrors(updatedErrors);
      return false;
    }
    return true;
  };

  const submitForm = () => {
    if (validate()) {
      setIsReportVisible(true);
    } else {
      setIsReportVisible(false);
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
                setName(e.target.value);
                setIsReportVisible(false);
                setErrors({ ...errors, name: "" });
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
                setValue(e.target.value);
                setIsReportVisible(false);
                setErrors({ ...errors, value: "" });
              }}
            />
            {!errors.value && (
              <small id="emailHelp" className="form-text text-muted">
                Between 1-100
              </small>
            )}
            {errors.value && <div className="error">{errors.value}</div>}
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
                setStartDate(e.target.value);
                setIsReportVisible(false);
                setErrors({ ...errors, startDate: "", endDate: "" });
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
                setEndDate(e.target.value);
                setIsReportVisible(false);
                setErrors({ ...errors, endDate: "", startDate: "" });
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
