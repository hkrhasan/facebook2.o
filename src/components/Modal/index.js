import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

export default function Modal({
  ModalController,
  backgroundStyle,
  closeStyle,
  titleStyle,
  title,
  subtitle,
  subtitleStyle,
  titleContainerStyle,
  children,
}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <ModalController onClick={openModal} />

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
            <div
              className={clsx(
                "fixed inset-0 bg-white bg-opacity-70",
                backgroundStyle
              )}
            />
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
                    className={clsx(
                      "absolute top-[10px] right-4",
                      closeStyle?.className
                    )}
                  >
                    <IoClose size={closeStyle?.size || 28} />
                  </button>
                  <div
                    className={clsx(
                      "grid gap-y-3 px-4 py-2",
                      titleContainerStyle
                    )}
                  >
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className={clsx(
                          "text-4xl font-bold leading-6 text-gray-900",
                          titleStyle
                        )}
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    {subtitle && (
                      <p className={clsx("text-base", subtitleStyle)}>
                        {subtitle}
                      </p>
                    )}
                  </div>
                  {(title || subtitle) && <hr />}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
