import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../utils/client";
import { Switch } from "@headlessui/react";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import CategoryButton from "./CategoryButton";
import { motion } from "framer-motion";
import { statusTypes } from "../utils/data";

function AddCardModal({ categoryData, addCard, handleClose }) {
  const [categoryName, setCategoryName] = useState("");
  const [categorySelected, setCategorySelected] = useState(false);

  const handleCategoryChange = () => {
    if (!categorySelected) {
      setCategorySelected(!categorySelected);
    } else {
      setCategorySelected(categorySelected);
    }
}

  return (
    <main className="my-auto transition rounded-3xl h-[650px] bg-gray-100 dark:bg-zinc-800 w-[600px] max-w-full max-h-[700px] p-6 duration-100 border-8 border-transparent">
      <header className="flex justify-between items-center mb-6 mx-1">
        <div className="">
          <XIcon className="h-7 w-7 text-transparent" />
        </div>
        <h1 className="font-semibold text-[1.7rem] dark:text-white">
          New Task
        </h1>
        <button className="">
          <XIcon className="h-7 w-7 dark:text-white" onClick={handleClose} />
        </button>
      </header>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
          dueDate: "",
          duration: "15",
          urgent: false,
          status: statusTypes.NOT_STARTED,
        }}
        onSubmit={async (values) => {
          addCard(values);
          // post to supabase
          
          // call refresh function
          handleClose();
        }}
      >
        {({ values, errors, touched, dirty, setFieldValue }) => (
          <Form className="flex-col mx-2">
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className="mb-2 py-2 pl-3 border-b-2 border-transparent bg-transparent w-full text-xl font-semibold focus:outline-none focus:bg-gray-200 rounded-xl dark:text-white dark:focus:bg-zinc-700 "
            />
            <Field
              as="textarea"
              type="description"
              name="description"
              placeholder="Description"
              className=" mb-4 mt-1 py-2 px-3 bg-transparent w-full h-24  focus:outline-none resize-none border-b-2 border-transparent rounded-xl focus:bg-gray-200 dark:text-white dark:focus:bg-zinc-700"
            />
            <section className="">
              <div className="flex justify-between  mb-4 mt-1">
                <div className="">
                  <p className="text-gray-400 ml-3">Status</p>
                  <Field
                    as="select"
                    type="text"
                    name="status"
                    className="p-2 mt-1 mr-2 font-semibold bg-transparent focus:bg-gray-200 rounded-xl focus:outline-none dark:text-white dark:focus:bg-zinc-700"
                  >
                    <option value={statusTypes.NOT_STARTED}>Not Started</option>
                    <option value={statusTypes.IN_PROGRESS}>In Progress</option>
                    <option value={statusTypes.STALLED}>Stalled</option>
                    <option value={statusTypes.COMPLETED}>Completed</option>
                  </Field>
                </div>
                <div className="">
                  <p className="text-gray-400 flex justify-end px-2 pb-1">
                    Due
                  </p>
                  <Field
                    type="date"
                    name="dueDate"
                    placeholder="Due Date"
                    className="flex-1 p-2 bg-transparent font-semibold focus:bg-gray-200 rounded-xl focus:outline-none dark:text-white dark:focus:bg-zinc-700"
                  />
                </div>
              </div>
              <div>
                <Field
                  type="text"
                  name="category"
                  className="hidden bg-transparent rounded-2xl focus:outline-none"
                ></Field>
                <p className="text-gray-400 ml-3">Category</p>
                <section className="flex justify-between py-3 px-1 mb-4 mt-1 mx-3">
                  {categoryData.map((category) => (
                    <CategoryButton
                      key={category.title}
                      name={category.title}
                      categoryColor={category.color}
                      selected={values.category === category.title}
                      handleClick={() =>
                        setFieldValue("category", category.title)
                      }
                    />
                  ))}
                </section>
              </div>
              <section className="flex justify-between">
                <div className="flex-col">
                  <p className="text-gray-400 mx-3">Duration (In Minutes)</p>
                  <Field
                    as="select"
                    type="number"
                    name="duration"
                    className="p-2 mt-1  bg-transparent rounded-xl focus:outline-none font-semibold focus:bg-gray-200 dark:text-white dark:focus:bg-zinc-700"
                  >
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                    <option value="120">120</option>
                  </Field>
                </div>
                <div className="">
                  <p className="text-gray-400 mb-2 mr-2">Urgent</p>
                  <Field
                    component={Switch}
                    type="checkbox"
                    name="urgent"
                    placeholder="Urgent"
                    className="hidden px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
                  />
                  <div className="flex">
                    {/* <p className="text-gray-400">No</p> */}
                    <Switch
                      // checked={enabled}
                      onChange={() => setFieldValue("urgent", !values.urgent)}
                      className={`${
                        values.urgent
                          ? "bg-red-600"
                          : "bg-gray-200 dark:bg-zinc-700"
                      } relative inline-flex h-6 w-11 items-center rounded-full transition duration-200`}
                    >
                      <span
                        className={`${
                          values.urgent ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200`}
                      />
                    </Switch>
                    {/* <p className="text-gray-400">Yes</p> */}
                  </div>
                </div>
              </section>
            </section>
            <footer className=" flex justify-between items-center mt-12 ">
              <QuestionMarkCircleIcon className="h-7 w-7 text-gray-400 cursor-pointer" />

              <button
                type="submit"
                className="flex align-right border-2 rounded-full py-1 px-6 border-black bg-black text-white  transition transform hover:scale-105 duration-100 active:scale-95 ease-in-out font-bold disabled:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white disabled:border-gray-300 dark:disabled:bg-zinc-700 dark:disabled:border-zinc-800 dark:disabled:text-zinc-500 dark:bg-white dark:text-black"
                disabled={!dirty}
              >
                Create
              </button>
            </footer>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default AddCardModal;
