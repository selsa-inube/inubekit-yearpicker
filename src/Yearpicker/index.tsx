import { useState, useEffect } from "react";
import { Select } from "@inubekit/select";
import { IYearpickerOrder } from "./props";

interface IYearpicker {
  start?: number;
  end?: number;
  order?: IYearpickerOrder;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  value?: string;
}

const Yearpicker = (props: IYearpicker) => {
  const {
    start = 2000,
    end = new Date().getFullYear(),
    order = "desc",
    onChange,
    placeholder,
    value = "",
  } = props;

  const [years, setYears] = useState<
    { id: string; label: string; value: string }[]
  >([]);

  useEffect(() => {
    let yearList = Array.from({ length: end - start + 1 }, (_, i) =>
      (start + i).toString(),
    );
    if (order === "asc") {
      yearList = yearList.reverse();
    }
    setYears(
      yearList.map((year) => ({
        id: year,
        label: year,
        value: year,
      })),
    );
  }, [start, end, order]);

  const handleChange = (name: string, value: string) => {
    onChange(name, value);
  };

  return (
    <Select
      name="year"
      options={years}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export { Yearpicker };
export type { IYearpicker };
