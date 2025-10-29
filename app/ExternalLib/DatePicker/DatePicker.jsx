import { DatePicker } from "antd";

const DatePicker1 = ({ readonly, handleChange, value, max }) => {
  return (
    <>
      <DatePicker
        format="DD-MM-YYYY"
        disabled={readonly} maxDate={max} value={value} onChange={handleChange} />
    </>
  );
};

export default DatePicker1;
