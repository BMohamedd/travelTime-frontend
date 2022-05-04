import React, { useEffect } from "react";
import { requestSavedPostes } from "../redux/actionCreators/myPostesActionCreator";
import Creator from "./HomeComponents/profileComponents/Creator";
import CodeAndBugReport from "./HomeComponents/CodeAndBugReport";
function SavedPostes() {
  const [postes, changePostes] = React.useState([]);
  useEffect(() => {
    requestSavedPostes().then((data) => changePostes(data.data));
  }, []);
  if (postes.length === 0) {
    return (
      <div className="container">
        <div className="row d-flex flex-column align-items-center">
          <div className="col-12 col-md-10 col-lg-8 mt-5" id="holder">
            <CodeAndBugReport />
            <div
              className=" shadow-lg alert alert-success text-center"
              role="alert"
            >
              Save some Postes To see them here!
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row d-flex flex-column align-items-center">
        <div className="col-12 col-md-10 col-lg-8 mt-5" id="holder">
          <CodeAndBugReport />
          {postes.map((value) => {
            return (
              <div
                className="card shadow-lg text-start mt-5"
                key={value.post._id}
              >
                <Creator
                  user={value.creator}
                  date={value.post.createdAT}
                  browse={true}
                  id={value.post._id}
                />
                <h5 className="ms-3">{value.post.title}</h5>
                <p className="w-75 ms-3">{value.post.body}</p>
                <div className="text-center">
                  <img
                    className="rounded img-fluid"
                    src={
                      value.post.picture ||
                      `https://picsum.photos/${Math.floor(
                        Math.random() * 1500 + 1000
                      )}`
                    }
                    alt="post"
                  />
                </div>
                <p className="mt-3 ms-3">
                  {value.post.likeCounter === 1
                    ? value.post.likeCounter + " like"
                    : value.post.likeCounter + " likes"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SavedPostes;
