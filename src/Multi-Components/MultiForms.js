import React, { useState } from "react";
import Pg1Form from "./Pg1Form";
import Pg2Form from "./Pg2Form";
import Pg3Form from "./Pg3Form";

function MultiForms() {
  const [page, setPage] = useState(1);

  return (
    <>
      <center>
        <h1>Multi-Step-Forms</h1>

        <p>Page {page} / 3</p>
        {page == 1 ? <Pg1Form /> : page == 2 ? <Pg2Form /> : <Pg3Form />}

        {page > 1 && (
          <button
            type="submit"
            onClick={() => setPage(page - 1)}
            class="btn btn-primary mx-4"
          >
            Pervious
          </button>
        )}
        {page < 3 && (
          <button
            type="submit"
            onClick={() => setPage(page + 1)}
            class="btn btn-primary"
          >
            Next
          </button>
        )}
        {page == 3 && (
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        )}
      </center>
    </>
  );
}

export default MultiForms;
