import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PreviousIcon from "@material-ui/icons/ArrowBackIos";
import NextIcon from "@material-ui/icons/ArrowForwardIos";
import AddIcon from "@material-ui/icons/AddToPhotos";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
  displayMode: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
  createMode: {
    position: "absolute",
    top: "calc(100% - 56px)",
    width: "100%",
  },
});

interface NavProps {
  prevCard?: () => void;
  nextCard?: () => void;
}

export default function SimpleBottomNavigation({
  prevCard,
  nextCard,
}: NavProps) {
  const style = useStyles();
  // const history = useHistory();

  return (
    <>
      {!prevCard && ( // if no props are passed, we are in create mode
        <BottomNavigation showLabels className={style.createMode}>
          <BottomNavigationAction
            label="Cancel"
            icon={<CancelIcon />}
            // onClick={() => history.goBack()}
          />
        </BottomNavigation>
      )}
      {prevCard && ( // if props exist, we are in display mode
        <BottomNavigation showLabels className={style.displayMode}>
          <BottomNavigationAction
            label="Previous"
            icon={<PreviousIcon />}
            onClick={prevCard}
          />
          <BottomNavigationAction
            label="New Card"
            icon={<AddIcon />}
            // onClick={() => history.push("/create-new-flashcard")}
          />
          <BottomNavigationAction
            label="Next"
            icon={<NextIcon />}
            onClick={nextCard}
          />
        </BottomNavigation>
      )}
    </>
  );
}
