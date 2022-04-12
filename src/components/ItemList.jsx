import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";

import { Box, Card, CardContent, Checkbox, Grid } from "@mui/material";
import { Edit, Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";
import { useStyles } from "../styles";

const ItemList = ({ list, setList }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState();
  const handleDelete = (index) => {
    setItemToDelete(index);
    setModalOpen(true);
  };

  const deleteItem = () => {
    const updatedList = list.filter((value, index) => {
      return index !== itemToDelete;
    });
    setModalOpen(false);
    setList(updatedList);
  };

  return (
    <Container className={classes.container} maxWidth="md">
      {!list.length ? (
        <Box m={1} display="flex" alignItems="center" flexDirection="column">
          <Card className={classes.card}>
            <CardContent>
              <Box m={10}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.buttonLabel}
                >
                  Your shopping list is empty :(
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.addButton}
                        component={Link}
                        to="/add"
                      >
                        Add your first item
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            className={classes.addButtonList}
            component={Link}
            to="/add"
          >
            Add List Item
          </Button>
          <Typography component="h3" className={classes.itemsTitle}>
            Your Items
          </Typography>
          <List className={classes.list}>
            {list.map((item, index) => {
              return (
                <ListItem key={index} button>
                  <Checkbox readOnly checked={item.purchased}></Checkbox>
                  <ListItemText
                    primary={item.name}
                    secondary={item.description}
                    className={item.purchased ? classes.purchased : ""}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      component={Link}
                      to={`/edit/${index}`}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(index)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <DeleteDialog
            openDialog={modalOpen}
            setOpenDialog={setModalOpen}
            deleteItem={deleteItem}
          />
        </>
      )}
    </Container>
  );
};
export default ItemList;
