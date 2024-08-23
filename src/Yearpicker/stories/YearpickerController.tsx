import { useState, useEffect } from "react";
import { IYearpicker, Yearpicker } from "..";

const YearpickerController = (props: IYearpicker) => {
  const {
    start,
    end,
    order = "desc",
    onChange,
    placeholder,
    value = "",
  } = props;

  const [selectedYear, setSelectedYear] = useState<string>(value);

  useEffect(() => {
    setSelectedYear(value);
  }, [value]);

  const handleChange = (name: string, newValue: string) => {
    setSelectedYear(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };

  return (
    <Yearpicker
      start={start}
      end={end}
      order={order}
      onChange={handleChange}
      placeholder={placeholder}
      value={selectedYear}
    />
  );
};

export { YearpickerController };
