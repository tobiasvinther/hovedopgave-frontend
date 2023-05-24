import { Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

interface Values {
  species: string;
  latitude: string;
  longitude: string;
  date: Dayjs;
  note: string;
}
interface ObservationProps {
  onSubmit: (values: Values) => void;
}

export const Observation: React.FC<ObservationProps> = ({ onSubmit }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Formik
        initialValues={{
          species: "",
          latitude: "",
          longitude: "",
          date: dayjs(Date.now()),
          note: "",
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <div>
              <TextField
                sx={{ marginBottom: 5, marginTop: 5, width: 300 }}
                required
                label="Hvilken fugl har du set"
                value={values.species}
                name="species"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                name="latitude"
                sx={{ marginBottom: 5, width: 300 }}
                required
                value={values.latitude}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                name="longitude"
                sx={{ marginBottom: 5, width: 300 }}
                required
                value={values.longitude}
                onChange={handleChange}
              />
            </div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ marginBottom: 5, width: 300 }}
                  format="DD/MM/YYYY"
                  label="Dato"
                  onChange={(newValue) => setFieldValue("date", newValue, true)}
                  value={values.date}
                />
              </LocalizationProvider>
            </div>
            <div>
              <TextField
                name="note"
                sx={{ marginBottom: 5, width: 300 }}
                multiline
                rows={4}
                value={values.note}
                onChange={handleChange}
              />
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <Button
              variant="contained"
              type="submit"
              sx={{ marginBottom: 5, width: 300 }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
