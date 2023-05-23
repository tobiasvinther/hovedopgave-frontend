import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
export default function DateTimePickerComponent() {
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs(new Date()));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        sx={{ marginBottom: 5, width: 300 }}
        format="DD/MM/YYYY LT"
        label="Date and time"
        value={dateValue}
        onChange={(newDateValue) => setDateValue(newDateValue)}
      />
    </LocalizationProvider>
  );
}
