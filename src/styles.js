import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FAFAFA!important",
    color: "#000!important",
  },
  appBarHome: {
    backgroundColor: "#4d81b7!important",
  },
  addButton: {
    background: "#1871e8",
    color: "#fff!important",
  },
  addButtonList: {
    background: "#1871e8",
    color: "#fff!important",
    float: "right",
  },
  buttonLabel: {
    fontFamily: "Nunito",
    fontSize: "18px",
    color: "#87898c",
    margin: "2rem"
  },
  helperInput: {
    position: "relative",
    top: "-2rem",
    right: "1rem",
    textAlign: "right!important",
  },
  icon: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  card: {
    position: "absolute",
    top: "20%",
  },
  cardContent: {
    flexGrow: 1,
  },
  container: {
    padding: "1rem",
  },
  list: {
    marginTop: "1rem",
  },
  itemsTitle: {
    margin: "1rem 0 0 1rem",
  },
  purchased: {
    textDecoration: "line-through",
  },
}));
