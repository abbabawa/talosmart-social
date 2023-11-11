import Post from "@/components/Post";
import React from "react";

const Posts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 offset-3 border">
          <form className="mt-4">
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="What's on your mind?"
              ></textarea>
              <div className="d-flex align-items-center ">
                <button className="btn btn-white ">
                  <i className="bi bi-camera-fill color-primary text-primary"></i>
                  <span className="ms-2">Upload an image</span>
                </button>
              </div>
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-primary">
                Post
              </button>
            </div>
          </form>
          <div>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
