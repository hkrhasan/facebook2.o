import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import clsx from "clsx";
import Input from "../Input";
import Modal from "../Modal";
import SelectInput from "../SelectInput";
import SignUpRadio from "../SignUpRadio";
import { addDocument, addDocumentWithDocId } from "../../firebase";
import { toast } from "react-hot-toast";

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

export default function SignUpModal() {
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
      ModalController={SignupModalController}
      title="Sign Up"
      subtitle="It's quick and easy."
    >
      <form onSubmit={onSubmit} className="grid gap-y-3 p-4">
        <div className="grid gap-y-3">
          <div className="grid grid-cols-2 gap-x-4">
            <Input
              type="text"
              placeholder="First Name"
              onChange={onChange}
              value={formData.firstName}
              name="firstName"
              className={clsx(
                errorFields.includes("firstName") &&
                  "border-red-500 text-red-500 placeholder:text-red-500"
              )}
            />
            <Input
              type="text"
              placeholder="Surname"
              onChange={onChange}
              value={formData.surName}
              name="surName"
              className={clsx(
                errorFields.includes("surName") &&
                  "border-red-500 text-red-500 placeholder:text-red-500"
              )}
            />
          </div>
          <Input
            type="email"
            placeholder="Email Address"
            onChange={onChange}
            value={formData.email}
            name="email"
            className={clsx(
              errorFields.includes("email") &&
                "border-red-500 text-red-500 placeholder:text-red-500"
            )}
          />
          <Input
            type="password"
            placeholder="New Password"
            onChange={onChange}
            value={formData.password}
            name="password"
            className={clsx(
              errorFields.includes("password") &&
                "border-red-500 text-red-500 placeholder:text-red-500"
            )}
          />
        </div>

        <div>
          <div className="grid gap-y-1">
            <div className="flex items-center gap-x-2">
              <h5 className="text-sm">Date of birth</h5>
              <BsFillQuestionCircleFill size={12} className="text-gray-500" />
            </div>
            <div className="grid grid-cols-3 gap-x-3">
              <SelectInput
                name="day"
                value={formData.day}
                onChange={onChange}
                options={[...Array(31).keys()].map((num) => {
                  return {
                    value: num + 1,
                    title: num + 1,
                  };
                })}
                className={clsx(
                  errorFields.includes("day") && "border-red-500"
                )}
              />
              <SelectInput
                name="month"
                onChange={onChange}
                value={formData.month}
                options={months.map((month) => {
                  return {
                    value: month,
                    title: month,
                  };
                })}
                className={clsx(
                  errorFields.includes("month") && "border-red-500"
                )}
              />
              <SelectInput
                name="year"
                onChange={onChange}
                value={formData.year}
                options={getYearOptions(new Date().getFullYear())}
                className={clsx(
                  errorFields.includes("year") && "border-red-500"
                )}
              />
            </div>
          </div>
        </div>

        <GenderRadioGroup
          gender={formData?.gender}
          setGender={(value) => {
            onChange({ target: { value, name: "gender" } });
          }}
          isError={errorFields.includes("gender")}
        />
        {formData.gender === "custom" ? (
          <div className="grid gap-y-2">
            <div className="grid gap-y-2">
              <SelectInput
                name="wish"
                onChange={onChange}
                options={[
                  {
                    title: "She: wish her a happy birthday",
                    value: "she",
                  },
                  {
                    title: "He: wish him a happy birthday",
                    value: "he",
                  },
                  {
                    title: "They: wish them a happy birthday",
                    value: "they",
                  },
                ]}
              />
              <p className="text-sm">Your pronoun is visible to everyone.</p>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Gender (optional)"
                onChange={onChange}
                value={formData?.ifCustomGender}
                name="ifCustomGender"
              />
            </div>
          </div>
        ) : null}
        <div className="grid gap-y-4">
          <p className="text-xs">
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </p>
          <p className="text-xs">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <button
            type="submit"
            onClick={() => {}}
            className="bg-green-500 w-52 text-white rounded-md py-2 px-4 font-bold"
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

function SignupModalController({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-green-500 max-w-max text-white rounded-md py-3 px-4 font-bold"
    >
      Create new account
    </button>
  );
}

function GenderRadioGroup({ gender, setGender, isError }) {
  const errorClass = isError && "border-red-500 text-red-500";
  return (
    <div>
      <div className="grid gap-y-1">
        <div className="flex items-center gap-x-2">
          <h5 className="text-sm">Gender</h5>
          <BsFillQuestionCircleFill size={12} className="text-gray-500" />
        </div>
        <div className="grid grid-cols-3 gap-x-3">
          <SignUpRadio
            title="Female"
            name="gender"
            onClick={() => setGender("female")}
            selected={gender === "female"}
            className={clsx(errorClass)}
          />
          <SignUpRadio
            title="male"
            name="gender"
            onClick={() => setGender("male")}
            selected={gender === "male"}
            className={clsx(errorClass)}
          />
          <SignUpRadio
            title="Custom"
            name="gender"
            onClick={() => setGender("custom")}
            selected={gender === "custom"}
            className={clsx(errorClass)}
          />
        </div>
      </div>
    </div>
  );
}
