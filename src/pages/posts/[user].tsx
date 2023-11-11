import Post from "@/components/Post";
import useMakeRequest from "@/hooks/useMakeRequest";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { IPost } from "@/types/post";

const Posts = () => {
  const searchParams = useSearchParams();
  const user = searchParams.get("user");

  const { sendRequest } = useMakeRequest();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [postData, setPostData] = React.useState({ post: "", image: "" });
  const [userPosts, setUserPosts] = React.useState<IPost[]>([]);
  const handleClick = (event: any) => {
    hiddenFileInput?.current?.addEventListener("change", handleChange);
    hiddenFileInput?.current?.click();
  };
  const handleChange = async (event: any) => {
    const fileUploaded = event.target.files[0];
    console.log(
      fileUploaded,
      event,
      hiddenFileInput?.current?.value,
      "uploaded file"
    );
    try {
      let img = await toBase64(fileUploaded);
      console.log(img, "base64");
      setPostData((prev) => ({ ...prev, image: fileUploaded }));
    } catch (e) {
      console.log(e);
    }
    // handleFile(fileUploaded);
  };

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const post = async () => {
    if (postData.image !== "") {
      console.log(postData, "post data");
      let res = await sendRequest(postData, "createpost", "POST");
      if (!res.error) {
      }
    } else if (postData.post !== "" && postData.image !== "") {
      let res = await sendRequest(postData, "createpost", "POST");
    } else {
      console.log("empty post");
    }
  };

  const fetchPosts = async () => {
    try {
      let res = await sendRequest({}, "posts/" + user, "GET");
      console.log(res, "posts");
      if (!res.error) {
        setUserPosts(
          res.data.map((post: any) => ({
            post: post.data.post,
            image: post.data.base64str,
          }))
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 offset-3 border mt-5">
          <form className="mt-4 border-bottom">
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="What's on your mind?"
                value={postData.post}
                onChange={(e) =>
                  setPostData((prev) => ({ ...prev, post: e.target.value }))
                }
              ></textarea>
              <div className="d-flex align-items-center mt-2">
                <input
                  type="file"
                  onChange={handleChange}
                  ref={hiddenFileInput}
                  className="btn btn-primary"
                />
                {/* <button
                  className="btn btn-white"
                  onClick={(e) => handleClick(e)}
                >
                  <i className="bi bi-camera-fill color-primary text-primary"></i>
                  <span className="ms-2">Upload an image</span>
                </button> */}
              </div>
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => post()}
              >
                Post
              </button>
            </div>
          </form>
          <div>
            <div className="mt-2">
              <h3 style={{ fontFamily: "Agbalumo" }}>Your posts</h3>
            </div>
            {userPosts.map((post, index) => (
              <Post key={index} post={post.post} image={post.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
