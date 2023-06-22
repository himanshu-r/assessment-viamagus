import React, { useState } from "react";
import moment from "moment";
import "./DatePicker.css";

const DatePicker = () => {
  const [fromDate, setFromDate] = useState(null);
  const [duration, setDuration] = useState("");
  const [toDate, setToDate] = useState(null);

  const handleFromDateChange = (selectedDate) => {
    const formattedDate = moment(selectedDate).format("YYYY-MM-DDTHH:mm");
    setFromDate(formattedDate);
    if (formattedDate && duration) {
      const calculatedToDate = moment(formattedDate)
        .add(duration, "hours")
        .format("YYYY-MM-DDTHH:mm");
      setToDate(calculatedToDate);
    } else {
      setToDate(null);
    }
  };

  const handleDurationChange = (event) => {
    const enteredDuration = event.target.value;
    setDuration(enteredDuration);
    if (fromDate && enteredDuration) {
      const calculatedToDate = moment(fromDate)
        .add(enteredDuration, "hours")
        .format("YYYY-MM-DDTHH:mm");
      setToDate(calculatedToDate);
    } else {
      setToDate(null);
    }
  };

  return (
    <div>
        <div className="date_picker_container">
            <label>From Date:</label>
            <input
                type="datetime-local"
                value={fromDate}
                onChange={(e) => handleFromDateChange(e.target.value)}
            />
            <br />
            <label>Duration (in hours):</label>
            <input type="text" value={duration} onChange={handleDurationChange} />
            <br />
            <label>To Date:</label>
            <input type="datetime-local" value={toDate} readOnly />

        </div>
    </div>
  );
};

export default DatePicker;