import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import clsx from "clsx";
import Input from "../Input";
import SelectInput from "../SelectInput";
import SignUpRadio from "../SignUpRadio";

export default function SignUpModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
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

  const onChange = (e) => {
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

  console.log({ formData });

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-green-500 max-w-max text-white rounded-md py-3 px-4 font-bold"
      >
        Create new account
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white  text-left align-middle shadow-2xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute top-[10px] right-4"
                  >
                    <IoClose size={28} />
                  </button>
                  <div className="grid gap-y-3 px-4 py-[10px]">
                    <Dialog.Title
                      as="h3"
                      className="text-4xl font-bold leading-6 text-gray-900"
                    >
                      Sign Up
                    </Dialog.Title>
                    <p className="text-base">It's quick and easy.</p>
                  </div>
                  <hr />
                  <div className="grid gap-y-3 p-4">
                    <div className="grid gap-y-3">
                      <div className="grid grid-cols-2 gap-x-4">
                        <Input
                          type="text"
                          placeholder="First Name"
                          onChange={onChange}
                          value={formData.firstName}
                          name="firstName"
                        />
                        <Input
                          type="text"
                          placeholder="Surname"
                          onChange={onChange}
                          value={formData.surName}
                          name="surName"
                        />
                      </div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        onChange={onChange}
                        value={formData.email}
                        name="email"
                      />
                      <Input
                        type="password"
                        placeholder="New Password"
                        onChange={onChange}
                        value={formData.password}
                        name="password"
                      />
                    </div>

                    <div>
                      <div className="grid gap-y-1">
                        <div className="flex items-center gap-x-2">
                          <h5 className="text-sm">Date of birth</h5>
                          <BsFillQuestionCircleFill
                            size={12}
                            className="text-gray-500"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-x-3">
                          <SelectInput
                            name="date"
                            onChange={onChange}
                            options={[...Array(31).keys()].map((num) => {
                              return {
                                value: num + 1,
                                title: num + 1,
                              };
                            })}
                          />
                          <SelectInput
                            name="month"
                            onChange={onChange}
                            options={months.map((month) => {
                              return {
                                value: month,
                                title: month,
                              };
                            })}
                          />
                          <SelectInput
                            name="year"
                            onChange={onChange}
                            options={getYearOptions(new Date().getFullYear())}
                          />
                        </div>
                      </div>
                    </div>

                    <GenderRadioGroup
                      gender={formData?.gender}
                      setGender={(value) => {
                        onChange({ target: { value, name: "gender" } });
                      }}
                    />
                    {formData.gender === "custom" ? (
                      <div>
                        <div>
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
                          <p className="text-sm">
                            Your pronoun is visible to everyone.
                          </p>
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
                        People who use our service may have uploaded your
                        contact information to Facebook. Learn more.
                      </p>
                      <p className="text-xs">
                        By clicking Sign Up, you agree to our Terms, Privacy
                        Policy and Cookies Policy. You may receive SMS
                        notifications from us and can opt out at any time.
                      </p>
                    </div>
                    <div className="flex justify-center mb-6">
                      <button
                        type="button"
                        onClick={() => {}}
                        className="bg-green-500 w-52 text-white rounded-md py-2 px-4 font-bold"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function GenderRadioGroup({ gender, setGender }) {
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
          />
          <SignUpRadio
            title="male"
            name="gender"
            onClick={() => setGender("male")}
            selected={gender === "male"}
          />
          <SignUpRadio
            title="Custom"
            name="gender"
            onClick={() => setGender("custom")}
            selected={gender === "custom"}
          />
        </div>
      </div>
    </div>
  );
}
