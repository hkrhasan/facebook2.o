import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
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
import { RxCross2 } from "react-icons/rx";
import { BiPhotoAlbum } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip";
import {BiDotsHorizontalRounded} from "react-icons/bi"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];


const currentDate = new Date();

const initialData = {
  day: `${currentDate.getDate()}`,
  month: `${months[currentDate.getMonth()]}`,
  year: `${currentDate.getFullYear()}`,
  firstName: "",
  gender: null,
  surName: "",
  password: "",
  email: "",
};

export default function PostModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [errorFields, setErrorFields] = useState([]);
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    if (errorFields.length) {
      const updatedErrorFields = errorFields.filter(
        (field) => field !== e.target.name
      );

      setErrorFields(updatedErrorFields);
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function getYearOptions(currentYear) {
    const options = [];

    for (let i = parseInt(currentYear); i >= 1905; i--) {
      options.push({
        value: i, // 2023, 2022 ........ 1905
        title: i,
      });
    }
    return options;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const fields = Object.keys(formData);

    const errorFields = fields.filter((field) => !formData[field]);

    if (errorFields.length) {
      console.log(errorFields);
      setErrorFields(errorFields);
      setIsLoading(false);
      return;
    }

    const { day, month, year, ...rest } = formData;

    // addDocument in firebase
    const { success, id, error } = await addDocumentWithDocId(
      "user1",
      {
        dob: `${day}-${month}-${year}`,
        ...rest,
      },
      rest.email.replace(/\./g, ",")
    );
    setIsLoading(false);

    if (!success) {
      toast.error(error);
      return;
    }

    toast.success(`user created successfully with id ${id}`);
    setIsOpen(false);
    setFormData(initialData);
  }

  return (
    <Modal
      ModalController={PostModalController}
      title="Create Post"
      titleStyle="text-xl text-center"
      closeStyle={{
        className: "bg-gray-200 rounded-full p-1",
        size: 26,
      }}
      titleContainerStyle="py-4"
    >
      {/* Div for wrapping all divs => for giving internal margin of div's content as per facebook */}
      <div className="mx-3">
        {/* Name and Avatar Div  */}
        <div className="profie-part flex gap-2 items-center">
          <div className="avatar">
            <Avatar />
          </div>
          <div className="profile-des">
            <span>utpal</span>
            <div className="flex items-center bg-zinc-300 rounded-md px-1">
              <div>
                <GiEarthAmerica />
              </div>
              <div>Public</div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
        {/* For giving Scroll => wrapper div of textarea div and add-phots/videos div  */}
        <div className="h-56 overflow-y-scroll overflow-x-hidden">
          {/* Textarea and smile emoji div */}
          <div className="post-des w-full flex items-center justify-between ">
            <div className="mt-3">
              <textarea
                placeholder="What's on your mind, Utpal?"
                className="w-96 border-none text-base resize-none focus:border-none focus:outline-none"
              />
            </div>
            <div className="smiley-icon text-2xl">
              <HiOutlineFaceSmile />
            </div>
          </div>
          {/* Add photos/videos Div */}
          <div className="inner-container border-2 rounded-md">
            <div className="float-right border-2 rounded-full p-1 mt-4">
              <RxCross2 />
            </div>
            <div className="flex flex-col items-center justify-center mt-16">
              <BiPhotoAlbum className="text-5xl bg-zinc-300 rounded-full p-2" />
              <p className="text-lg font-medium">Add Photos/Videos</p>
              <p>or drag and drops</p>
            </div>
            <div className="flex justify-between items-center mt-14 mb-8">
              <div className="border-2 rounded-full bg-zinc-300 text-3xl p-1">
                <GiSmartphone />
              </div>
              <div className="text-sm">
                Add photos and videos from your mobile device.
              </div>
              <div className="font-medium bg-zinc-300 px-3 py-1 rounded-md">
                Add
              </div>
            </div>
          </div>
        </div>
        {/* Add to your post and icons div */}
        <div className="flex items-center justify-between border-2 py-3 mt-3 rounded-md">
          <div className="font-medium">Add to your post</div>
          <div className="down-icons">
            <iconsRender title="photo/video" img="img/first.png"/>
            <iconsRender title="Tag people" img="img/second.png"/>
            <iconsRender title="felling/activity" img="img/third.png"/>
            <iconsRender title="check in" img="img/fourth.png"/>
            <iconsRender title="This can't be combined with what you'he already added to your post" img="img/fifth.png"/>
            <TooltipProvider>
              <Tooltip title="More">
                <BiDotsHorizontalRounded />
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <button>Post</button>
      </div>
    </Modal>
  );
}

function PostModalController({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-full bg-[#f0f2f5] px-3 py-2 hover:bg-[#e1e0e0] w-full"
    >
      <p>What's on your mind, Talib?</p>
    </div>
  );
}


function iconsRender({title,img}){
  return(
    <div>
      <TooltipProvider>
        <Tooltip title={title}>
          <img src={img}/>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}