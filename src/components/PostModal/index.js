import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import clsx from "clsx";
import Input from "../Input";
import SelectInput from "../SelectInput";
import SignUpRadio from "../SignUpRadio";
import { addDocument, addDocumentWithDocId } from "../../firebase";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Avatar from "../Avatar";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { BiLock, BiPhotoAlbum } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Fontchange } from "../../assets/createposticons";
// import { TooltipProvider } from "@radix-ui/react-tooltip";
import { BiDotsHorizontalRounded } from "react-icons/bi";
// import { Media,Tag,Emoji } from "../../assets/createposticons";
import { Tooltip } from "..";
import { render } from "@testing-library/react";
import { SidebarRow } from "..";
// import { Tooltip } from '@mui/material';

export default function PostModal({ title }) {
  const [MediaChange, setMediaChange] = useState(false);
  const [Active, setActive] = useState("");
  const [PostTitle, setPostTitle] = useState("");
  const [Heading, setHeading] = useState("Create Post");
  const [NextDialogue, setNextDialogue] = useState(1);
  const [Invisible, setInvisible] = useState(true);
  const UserDetails = {
    title: "kapil",
    img: "",
    as: "profile",
  };
  return (
    <Modal
      ModalController={PostModalController}
      title={Heading}
      titleStyle="text-xl text-center"
      diaSize="max-w-lg"
      closeStyle={{
        className: "bg-gray-200 rounded-full p-1",
        size: 26,
      }}
      titleContainerStyle="py-4"
      postDialogue={CreatePostDialogue}
      InVisible={Invisible}
    >
      {/* Div for wrapping all divs => for giving internal margin of div's content as per facebook */}
      <div className="mx-3 relative">
        {/* Name and Avatar Div  */}

        {/* first textarea after opening Dialog box */}
        <MainBodyFunc />
      </div>
    </Modal>
  );
  function MainBodyFunc() {
    switch (NextDialogue) {
      case 1:
        return <CreatePostDialogue />;
      case 2:
        return <TagDialogue />;
      case 3:
        return <FeelingsDialogue />;
      default:
        setNextDialogue(1);
    }
  }
  function CreatePostDialogue() {
    const ref = useRef(null);
    const [formData, setFormData] = useState({
      postBody: "",
      image: undefined,
    });

    if (setNextDialogue) {
      // to back on front page
      setNextDialogue(1);
      // to hide the left arrow icon from create post dialogue box
      setInvisible(true);
    }
    return (
      <>
        <div className="profie-part flex gap-2 items-center">
          <div className="avatar">
            <Avatar />
          </div>
          <div className="profile-des font-semibold">
            <span>{title}</span>
            <div className="flex items-center justify-around bg-zinc-300 rounded-md px-1 w-20 h-6 text-xs font-semibold">
              <div>
                <GiEarthAmerica />
              </div>
              <div className="text-sm font-semibold ">Public</div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            `h-full w-ful items-start flex flex-col gap-20  justify-center`,
            { hidden: MediaChange === true, block: MediaChange === false }
          )}
        >
          <textarea
            className="w-full h-50 resize-none focus:outline-none focus:shadow-none ring-transparent focus:ring-transparent border-transparent focus:border-transparent"
            placeholder="What's on your mind, kapil?"
            // value={PostTitle}
            onClick={(e) => {
              setPostTitle(e.target.value);
            }}
          />
          <div className=" w-full flex justify-between items-center">
            <img src={Fontchange} className="w-10 h-auto" />
            <div className="smiley-icon text-4xl text-gray-400">
              <HiOutlineFaceSmile />
            </div>
          </div>
        </div>

        {/* For giving Scroll => wrapper div of textarea div and add-phots/videos div*/}
        <div
          className={clsx({
            block: MediaChange === true,
            hidden: MediaChange === false,
          })}
        >
          <div className="overflow-y-scroll h-60">
            {/* Textarea and smile emoji div */}
            <div className="post-des w-full flex items-center justify-between ">
              <div className="mt-3">
                <textarea
                  placeholder="What's on your mind, kapil?"
                  className="w-full resize-none focus:outline-none focus:shadow-none ring-transparent focus:ring-transparent border-transparent focus:border-transparent"
                  // value={PostTitle}
                  onClick={(e) => {
                    setPostTitle(e.target.value);
                  }}
                />
                {console.log(PostTitle)}
              </div>
              <div className="smiley-icon text-2xl">
                <HiOutlineFaceSmile />
              </div>
            </div>
            {/* Add photos/videos Div */}
            <div
              className={clsx(
                `border-2 rounded-md flex flex-col justify-between p-2 relative`,
                { hidden: MediaChange === false }
              )}
              onClick={(e) => {
                ref.current?.click();
              }}
            >
              <div
                className="absolute top-4 right-4 kapil p-1 cursor-pointer"
                onClick={onClick}
              >
                <RxCross2 className="text-xl" onClick={onClick} />
              </div>
              <div className="bg-gray-200 pt-50 pb-20 rounded ">
                <div className="flex flex-col items-center justify-center  mt-16">
                  <BiPhotoAlbum className="text-5xl bg-zinc-300 rounded-full p-2" />
                  <p className="text-lg font-medium">Add Photos/Videos</p>
                  <p>or drag and drops</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2  bg-gray-200 rounded p-2">
                <div className="border-2 rounded-full bg-zinc-300 text-3xl p-1">
                  <GiSmartphone />
                </div>
                <div className="text-sm">
                  Add photos and videos from your mobile device.
                </div>

                <input
                  ref={ref}
                  type="file"
                  hidden
                  onChange={(e) => {
                    console.log(e.target.files);
                  }}
                />
                <div className="font-medium bg-zinc-300 px-3 py-1 rounded-md">
                  Add
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add to your post and icons div */}
        <div className="flex items-center justify-between border-2 py-3 px-3 mt-3 rounded-md">
          <div className="font-semibold">Add to your post</div>
          <div className="down-icons flex gap-5 items-center">
            <IconsRender
              title="photo/video"
              img="img/first.png"
              onClick={onClick}
              active={clsx({ "bg-gray-200": Active })}
            />
            <IconsRender
              title="Tag people"
              img="img/second.png"
              onClick={() => {
                setNextDialogue(2);
              }}
            />
            <IconsRender
              title="felling/activity"
              img="img/third.png"
              onClick={() => {
                setNextDialogue(3);
              }}
            />
            <IconsRender
              title="check in"
              img="img/fourth.png"
              onClick={() => {
                setNextDialogue(4);
              }}
            />
            <IconsRender
              title="This can't be combined with what you'he already added to your post"
              img="img/fifth.png"
            />
            <BiDotsHorizontalRounded />
          </div>
        </div>

        <button className="bg-blue-600 w-full rounded-md text-white p-2 mt-4 mb-4">
          Post
        </button>
      </>
    );
  }
  function TagDialogue() {
    setHeading("Tag People");
    setInvisible(false);
    return (
      <>
        <div>
          <div className="flex justify-between px-1 py-2 gap-5 items-center">
            <div
              className={clsx(
                "bg-[#f0f2f5] p-2 rounded-full h-10 lg:w-full lg:px-2 flex items-center"
              )}
            >
              <HiOutlineSearch size={20} />
              <Input
                className="hidden lg:block bg-transparent outline-none border-none py-0"
                placeholder="Search facebook"
              />
            </div>
            <div className="text-md text-blue-600 text font-semibold">
              <p>Done</p>
            </div>
          </div>

          <div>
            <div className="text-gray-600 text-xs p-1">
              <p>SEARCH</p>
            </div>
            <SidebarRow {...UserDetails} />
            <SidebarRow {...UserDetails} />
            <SidebarRow {...UserDetails} />
            <SidebarRow {...UserDetails} />
            <SidebarRow {...UserDetails} />
          </div>
        </div>
      </>
    );
  }
  function FeelingsDialogue() {
    setHeading("How are you feeling?");
    setInvisible(false);
    return (
      <>
        <h1
          className={clsx(
            "absolute left-0 transition duration-500 ease-in-out",
            { block: NextDialogue === 2 }
          )}
        >
          Feelings
        </h1>
      </>
    );
  }

  function PostModalController({ onClick }) {
    return (
      <div onClick={onClick}>
        <textarea
          placeholder="What's on your mind,kapil?"
          className=" w-full h-100 resize-none focus:outline-none focus:shadow-none ring-transparent focus:ring-transparent border-transparent focus:border-transparent"
          value={PostTitle}
        />
      </div>
    );
  }

  function IconsRender({ title, img, onClick, active }) {
    return (
      <Tooltip title={title}>
        <div
          className={clsx(
            "hover:bg-gray-200 p-1 rounded-full cursor-pointer",
            active
          )}
          onClick={onClick}
        >
          <img src={img} />
        </div>
      </Tooltip>
    );
  }
  function onClick(e) {
    console.log(e.target);
    if (e.target.tagName === "svg") {
      setMediaChange(false);
      setActive(false);
      return;
    }
    setMediaChange(true);
    setActive(true);
  }
}
