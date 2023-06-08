import {
  Button,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { AddAPhoto } from "@mui/icons-material";
import { Container } from "../../components/container/container";
import { useAuth } from "../../components/authprovider/authProvider";

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
  const { auth } = useAuth();
  const latitudeRegex =
    /^(54\.6[0-9]{4}|54\.[7-9][0-9]{4}|55\.[0-8][0-9]{4}|55\.9[0-2][0-9]{3})$/;
  const longitudeRegex =
    /^(8\.[0-9]{4}|9\.[0-8][0-9]{4}|9\.9[0-9]{4}|10\.[0-3][0-9]{4}|10\.4[0-2][0-9]{3})$/;

  if (auth !== true) {
    return (
      <Container>
        <Typography
          variant="h5"
          sx={{ marginTop: 2, marginLeft: 55, marginBottom: 2 }}
        >
          Observation
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginTop: 2, marginLeft: 55, marginBottom: 2 }}
        >
          Du skal være logged ind for at bruge denne side
        </Typography>
      </Container>
    );
  }
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ marginTop: 2, marginLeft: 55, marginBottom: 2 }}
      >
        Observation
      </Typography>
      <Formik
        initialValues={{
          species: "",
          latitude: "0",
          longitude: "0",
          date: dayjs(Date.now()),
          note: "",
          image: null,
          imageRef: "",
        }}
        onSubmit={(values) => {
          const formData = new FormData();
          if (values.image) formData.append("image", values.image);
          formData.append("species", values.species);
          formData.append("latitude", values.latitude);
          formData.append("longitude", values.longitude);
          formData.append("date", values.date.toString());
          formData.append("note", values.note);
          fetch("http://localhost:8080/api/observations", {
            method: "POST",
            credentials: "include",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data); // Response from the server
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form encType="multipart/form-data">
            <Stack spacing={3} style={{ alignItems: "center" }}>
              <TextField
                required
                sx={{ width: 300 }}
                label="Hvilken fugl har du set"
                value={values.species}
                name="species"
                onChange={handleChange}
              />
              <TextField
                required
                name="latitude"
                label="Bredegrad"
                sx={{ width: 300 }}
                value={values.latitude}
                onChange={handleChange}
                error={!values.latitude && !latitudeRegex.test(values.latitude)}
                helperText={
                  values.latitude && !latitudeRegex.test(values.latitude)
                    ? "Invalid latitude coordinate"
                    : null
                }
              />
              <TextField
                required
                name="longitude"
                label="Længdegrad"
                sx={{ width: 300 }}
                value={values.longitude}
                onChange={handleChange}
                error={
                  !values.longitude && !longitudeRegex.test(values.longitude)
                }
                helperText={
                  values.longitude && !longitudeRegex.test(values.longitude)
                    ? "Invalid latitude coordinate"
                    : null
                }
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: 300 }}
                  format="DD/MM/YYYY"
                  label="Dato"
                  onChange={(newValue) => setFieldValue("date", newValue, true)}
                  value={values.date}
                />
              </LocalizationProvider>
              <TextField
                name="note"
                label="Note"
                sx={{ width: 300 }}
                multiline
                rows={4}
                value={values.note}
                onChange={handleChange}
              />
              <Tooltip title="Tilføj billede">
                <IconButton component="label">
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
              </Tooltip>
              <img
                alt=""
                src={values.imageRef}
                style={{ maxWidth: 256, maxHeight: 512 }}
              />

              <Button variant="contained" type="submit" sx={{ width: 300 }}>
                Submit
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
