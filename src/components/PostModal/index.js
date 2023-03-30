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
      <div>
        <h1>Post Modal</h1>
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
