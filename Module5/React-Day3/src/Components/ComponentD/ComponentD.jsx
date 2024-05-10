import React from "react";

const ComponentD = ({ arrObj }) => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {arrObj.map((ele, index) => {
          return (
            <>
              <div key={index}>
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title">{ele.id}</h4>
                      <h4 class="card-title">{ele.name}</h4>
                      <h4 class="card-title">{ele.age}</h4>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-danger">Button</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ComponentD;
