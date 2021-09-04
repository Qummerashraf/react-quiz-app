import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Show from "./Show";

function Fetch() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("jdata.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const handleNext = () => {
    document.getElementById("wrap").scrollLeft += 180;
  };
  const handlePrev = () => {
    document.getElementById("wrap").scrollLeft -= 180;
  };

  return (
    <Box>
      <Container>
        <Grid container>
          <div className="wrapper" id="wrap">
            {data?.length
              ? data.map((list) => (
                  <Show
                    question={list.question}
                    option={list.options}
                    answer={list.answerId}
                    key={list.id}
                    number={list.number}
                  />
                ))
              : ""}
          </div>
          <button className="next" onClick={handleNext}>
            Next
          </button>
          <button className="prev" onClick={handlePrev}>
            Prev
          </button>
        </Grid>
      </Container>
    </Box>
  );
}

export default Fetch;
