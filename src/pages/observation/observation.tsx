import { Button, IconButton, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { AddAPhoto } from "@mui/icons-material";

interface Values {
  species: string;
  latitude: string;
  longitude: string;
  date: Dayjs;
  note: string;
  image: File | null;
  imageRef: any;
}
interface ObservationProps {
  onSubmit: (values: Values) => void;
}

export const Observation: React.FC<ObservationProps> = () => {
  const formData = new FormData();

  return (
    <div style={{ textAlign: "center" }}>
      <Formik
        initialValues={{
          species: "",
          latitude: "",
          longitude: "",
          date: dayjs(Date.now()),
          note: "",
          image: null,
          imageRef: "",
        }}
        onSubmit={(values) => {
          if (values.image) formData.append("image", values.image);
          formData.append("species", values.species);
          formData.append("latitude", values.latitude);
          formData.append("longitude", values.longitude);
          formData.append("date", values.date.toString());
          formData.append("note", values.note);
          fetch("http://localhost:8080/api/upload", {
            method: "POST",
            body: formData,
          });
        }}
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
              <IconButton component="label" sx={{ marginBottom: 5 }}>
                <AddAPhoto />
                <input
                  accept="image/*"
                  type="file"
                  hidden
                  id="image"
                  name="image"
                  onChange={(imageValue) => {
                    if (!imageValue.currentTarget.files) return;
                    setFieldValue("image", imageValue.currentTarget.files[0]);
                    values.imageRef = URL.createObjectURL(
                      imageValue.currentTarget.files[0]
                    );
                  }}
                />
              </IconButton>
              <div>
                <img
                  src={values.imageRef}
                  style={{ maxWidth: 256, maxHeight: 512 }}
                />
              </div>
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
            <Button variant="contained" type="submit" sx={{ width: 300 }}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
