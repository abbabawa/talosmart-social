import Image from "next/image";
import React from "react";

import postImg from "@/images/20210608_130714.jpg";
import { IPost } from "@/types/post";

const Post = ({ image, post }: IPost) => {
  return (
    <div className="card">
      <Image
        src={image}
        style={{ maxHeight: "250px", maxWidth: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p>{post}</p>
      </div>
    </div>
  );
};

export default Post;
