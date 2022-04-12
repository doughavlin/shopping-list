import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Snackbar,
  FormControl,
  TextField,
  FormHelperText,
  MenuItem,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useStyles } from "../styles";

const ListItem = ({ list, setList }) => {
  const params = useParams();
  const emptyItem = {
    name: "",
    description: "",
    quantity: 1,
  };
  const item = params.item ? list[params.item] : emptyItem;
  const mode = params.item ? "Edit" : "Add";
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(item);
  const [errors, setErrors] = useState({
    name: false,
    description: false,
  });

  const handleChange = (name) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues({ ...values, [name]: value });
  };
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const validation = {
      name: values.name === "",
      description: values.description === "",
    };
    setErrors(validation);
    if (!Object.values(validation).some((error) => error)) {
      // if there are no false values in the current validation continue on
      // don't use the state of errors here because it's not updated yet.
      setOpen(true);
      if (params.item) {
        list[params.item] = values;
        setList(list);
      } else {
        setList((list) => [...list, values]);
      }

      setValues({
        name: "",
        description: "",
        quantity: 1,
        purchased: false,
      });
    }
    navigate("/");
  };

  return (
    <Box m={3}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Successfully Added Item To List"
      />
      <Typography component="h1">{mode} an Item</Typography>
      <Typography>{mode} your new item below</Typography>
      <FormControl fullWidth>
        <TextField
          label="Item Name"
          value={values.name}
          variant="outlined"
          margin="dense"
          error={errors.name}
          onChange={handleChange("name")}
        />
        <TextField
          label="Description"
          value={values.description}
          multiline
          minRows={4}
          variant="outlined"
          margin="dense"
          inputProps={{ maxLength: 100 }}
          error={errors.description}
          onChange={handleChange("description")}
        />
        <FormHelperText
          className={classes.helperInput}
        >{`${values.description.length}/100`}</FormHelperText>

        <TextField
          select
          value={values.quantity}
          label="How many?"
          onChange={handleChange("quantity")}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </TextField>
        {mode === "Edit" && (
          <FormControlLabel
            control={
              <Checkbox
                checked={values.purchased}
                onClick={handleChange("purchased")}
              />
            }
            label="Purchased"
          />
        )}
      </FormControl>
      <Box sx={{ position: "absolute", right: "20px", bottom: "26px" }}>
        <Button component={Link} to="/">
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          variant="contained"
          color="primary"
          className={classes.addButton}
        >
          Save Item
        </Button>
      </Box>
    </Box>
  );
};

export default ListItem;
