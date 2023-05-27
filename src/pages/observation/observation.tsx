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
  image: string;
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
          image: File.name,
        }}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <div>
              <TextField
                sx={{ marginBottom: 5, marginTop: 5, width: 300 }}
                label="Hvilken fugl har du set"
                value={values.species}
                name="species"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                name="latitude"
                label="Bredegrad"
                sx={{ marginBottom: 5, width: 300 }}
                value={values.latitude}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                name="longitude"
                label="Længdegrad"
                sx={{ marginBottom: 5, width: 300 }}
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
              <Button variant="contained" component="label">
                Upload billede af fugl
                <input
                  accept="image/*"
                  type="file"
                  hidden
                  id="image"
                  name="image"
                  onChange={(imageValue) => {
                    if (!imageValue.currentTarget.files) return;
                    setFieldValue("image", imageValue.currentTarget.files);
                  }}
                />
              </Button>
            </div>
            <div>
              <TextField
                name="note"
                label="Note"
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
              onClick={() => console.log(values)}
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
