import React from "react";
import { Avatar, WhiteBox } from "../";
import testImage from "../../assets/profile.jpeg";
import feelingImg from "../../assets/facebookicons/feeling.png";
import videoImg from "../../assets/facebookicons/video.png";
import photoImg from "../../assets/facebookicons/photo.png";

const PostController = () => {
  return (
    <WhiteBox>
      <div className="px-3">
        <div className="flex items-center gap-x-2 py-3 border-b-[1px]">
          <Avatar src={testImage} />
          <div className="rounded-full bg-[#f0f2f5] px-3 py-2 hover:bg-[#e1e0e0] w-full">
            <p>What's on your mind, Talib?</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <ActionButton title="Live Video" img={videoImg} />
          <ActionButton title="Photo/Video" img={photoImg} />
          <ActionButton title="Feeling/activity" img={feelingImg} />
        </div>
      </div>
    </WhiteBox>
  );
};

export default PostController;

function ActionButton({ title, img }) {
  return (
    <div className="hover:bg-[#e1e0e0] w-full flex items-center justify-center gap-x-3 py-2 rounded-lg">
      <div>
        <img src={img} width="25px" />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}
