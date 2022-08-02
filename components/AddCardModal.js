import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../utils/client";
import { Switch } from "@headlessui/react";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import CategoryButton from "./CategoryButton";
import { motion } from "framer-motion";
import { categoryData, statusTypes } from "../utils/data";

function AddCardModal({ addCard, handleClose }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <motion.main className="my-auto transition rounded-2xl h-[625px] bg-gray-100 w-[600px] max-w-full max-h-[700px] p-6 duration-100 border-8 border-transparent">
      <header className="flex justify-between items-center mb-6">
        <div className="">
          <XIcon className="h-7 w-7 text-transparent" />
        </div>
        <h1 className="font-bold text-3xl ">New Task</h1>
        <button className="">
          <XIcon className="h-7 w-7" onClick={handleClose} />
        </button>
      </header>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
          dueDate: "",
          duration: "",
          urgent: false,
          status: "Not Started", //TODO: change to using statusTypes
        }}
        onSubmit={async (values) => {
          addCard(values);
          // post to supabase
          // call refresh function
        }}
      >
        {({ values, errors, touched, dirty }) => (
          <Form className="flex-col mx-4">
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className="mb-4 py-2 pl-3 border-b-2 border-transparent bg-transparent w-full text-2xl font-bold focus:outline-none "
            />
            <Field
              as="textarea"
              type="description"
              name="description"
              placeholder="Description"
              className=" mb-4 mt-1 py-2 pl-3 bg-transparent w-full h-20 focus:outline-none resize-none border-b-2 border-transparent rounded-xl focus:bg-gray-200"
            />
            <section className="">
              <div className="flex justify-between  mb-4 mt-1">
                <div className="">
                  <p className="text-gray-400">Status</p>
                  <Field
                    as="select"
                    type="text"
                    name="status"
                    placeholder="Status"
                    className="py-2 flex-1 font-bold bg-transparent focus:outline-none"
                  >
                    <option value="notstarted">Not Started</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                  </Field>
                </div>
                <div>
                  <p className="text-gray-400">Due</p>
                  <Field
                    type="date"
                    name="dueDate"
                    placeholder="Due Date"
                    className="flex-1 py-2 bg-transparent focus:outline-none font-bold"
                  />
                </div>
              </div>
              <div>
                <Field
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="bg-transparent rounded-2xl focus:outline-none"
                />
                <section className="flex justify-between py-3 px-1 mb-4 mt-1">
                  <CategoryButton
                    name={categoryData.dev.title}
                    color={{ backgroundColor: categoryData.dev.color }}
                    onClick
                  />
                  <CategoryButton
                    name={categoryData.design.title}
                    color={{ backgroundColor: categoryData.design.color }}
                  />
                  <CategoryButton
                    name={categoryData.lime.title}
                    color={{ backgroundColor: categoryData.lime.color }}
                  />
                  <CategoryButton
                    name={categoryData.emerald.title}
                    color={{ backgroundColor: categoryData.emerald.color }}
                  />
                  <CategoryButton
                    name={categoryData.cyan.title}
                    color={{ backgroundColor: categoryData.cyan.color }}
                  />
                  <CategoryButton
                    name={categoryData.blue.title}
                    color={{ backgroundColor: categoryData.blue.color }}
                  />
                  <CategoryButton
                    name={categoryData.purple.title}
                    color={{ backgroundColor: categoryData.purple.color }}
                  />
                  <CategoryButton
                    name={categoryData.pink.title}
                    color={{ backgroundColor: categoryData.pink.color }}
                  />
                </section>
              </div>
              <section className="flex justify-between">
                <div className="flex-col">
                  <p className="text-gray-400">Duration (In Minutes)</p>
                  <Field
                    as="select"
                    type="number"
                    name="duration"
                    placeholder="Duration (In Minutes)"
                    className="px-4 py-2 bg-transparent rounded-2xl focus:outline-none font-bold"
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
                  <p className="text-gray-400 mb-2">Urgent</p>
                  {/* <Field
                    type="checkbox"
                    name="urgent"
                    placeholder="Urgent"
                    className="px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
                  /> */}
                  <div className="flex space-x-2">
                    {/* <p className="text-gray-400">No</p> */}
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${
                        enabled ? "bg-red-600" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full transition duration-200`}
                    >
                      <span
                        className={`${
                          enabled ? "translate-x-6" : "translate-x-1"
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
                className="flex align-right border-2 rounded-full py-1 px-6 border-black bg-black text-white  transition transform hover:scale-105 duration-100 active:scale-95 ease-in-out font-bold disabled:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white disabled:border-gray-300"
                disabled={!dirty}
                onMouseUp={() => {
                  handleClose();
                }}
              >
                Create
              </button>
            </footer>
          </Form>
        )}
      </Formik>
    </motion.main>
  );
}

export default AddCardModal;
