import React, { useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import DeleteModal from "../../../widgets/Modals/ui/DeleteModal";
import EditModal from "../../../widgets/Modals/ui/EditModal";

const UserCard = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div className="cursor-pointer flex flex-col align-middle items-center justify-center mb-8">
        <div className="group h-72 w-64 [perspective:1000px]">
          <div className="flex justify-center items-center relative bg-main-light-dark h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div>
              <img
                className="object-cover mx-auto mb-4 w-36 h-36 rounded-full"
                alt="#"
                src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg"
              />
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">
                Aiana <br /> Abdyrakhmanova
              </h3>
              <p>CTO/Co-founder</p>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-500 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Aiana Abdyrakhmanova</h1>
                <p className="text-lg">Backend Developer</p>
                <p className="text-base">
                  Lorem lopdfndfjdk fkjd jdjfkd ss sdd
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <TrashIcon className="h-6 w-6 text-gray-100" />
                  </button>
                  <button
                    onClick={() => setShowEditModal(true)}
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    <PencilSquareIcon className="h-6 w-6 text-gray-100" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={() => setShowDeleteModal(false)}
      />
      <EditModal
        showModal={showEditModal}
        setShowModal={() => setShowEditModal(false)}
      />
    </>
  );
};

export default UserCard;
