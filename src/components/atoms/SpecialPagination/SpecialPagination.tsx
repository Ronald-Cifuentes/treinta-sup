import { ChangeEvent, FC } from 'react'
import { Pagination} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "15px",
    fontWeight: "400",
    minWidth: "24px",
    height: "24px",
    "& .MuiPaginationItem-circular": {
      minWidth: "24px",
      height: "24px"
    },
    "& .Mui-selected": {
      backgroundColor: "#FEE280",
      fontSize: "15px",
      fontWeight: "700",
      minWidth: "24px",
      height: "24px"
    }
  }
});

interface PropTypes {
    onChange?: (event: ChangeEvent<unknown>, page: number) => void,
    count: number
}

const SpecialPagination:FC<PropTypes> = ({onChange, count}) => {
    const classes = useStyles()
    return (
        <Pagination
            data-testid='special-pagination'
            count={count}
            className={classes.root}
            onChange={onChange}
        />
    )
}

export default SpecialPagination