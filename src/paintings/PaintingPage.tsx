// This will be the infinite scrolling page which will also send off fetch requests to the new pages
import React, { useState } from "react";
import { useFetch, Provider } from "use-http";
import { HARVARD_API_URL } from "./constants";
import { CircularProgress, GridList, GridListTile, List, ListItem, makeStyles, Paper } from "@material-ui/core";
import { Waypoint } from "react-waypoint";
import { Painting } from "./Painting";
import "./styles.css";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export const PaintingPage = () => {

    const classes = useStyles();

    const [page, setPage] = useState(1);

    // Fetch the data from the API
    // On newData create the same response object but store all records 
    const { loading, error, data } = useFetch(HARVARD_API_URL(page), { 
      data: [],
      onNewData: (currPainting, newPaintings) => ({ info: newPaintings.info, records: currPainting.length === 0 ? [...newPaintings.records] : [...currPainting.records, ...newPaintings.records]}),
     }, [page]) 
    
        
    return (
      <>
        <div className="center">
          {data.hasOwnProperty("records") &&
            <List className={classes.root}>
                {data.records.map((painting, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <Painting painting={painting}/>
                    </ListItem>
                    {index === data.records.length - 2 && (
                      <Waypoint onEnter={() => setPage(page + 1) } />
                    )}
                  </React.Fragment>
                ))}
            </List>
          }
        </div>

        
        {loading && 
          <div className="center">
            <CircularProgress/>
          </div>
        }

        {error && 
          <p>Error!</p>
        }

      </>
    );

}