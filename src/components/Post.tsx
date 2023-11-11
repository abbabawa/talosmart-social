import Image from "next/image";
import React from "react";

import postImg from "@/images/20210608_130714.jpg";

const Post = () => {
  return (
    <div className="card">
      <Image
        src={postImg}
        style={{ maxHeight: "250px", maxWidth: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          accusantium, quis tenetur ex quos nulla error fugit libero qui,
          deserunt ab praesentium voluptate fuga cumque facere laborum
          quibusdam! Quibusdam, esse.
        </p>
      </div>
    </div>
  );
};

export default Post;
