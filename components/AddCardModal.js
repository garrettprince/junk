import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../utils/client";
import { Switch } from "@headlessui/react";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import CategoryButton from "./CategoryButton";

function AddCardModal({ addCard, handleClose }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <main className="my-auto transition rounded-2xl h-[600px] bg-gray-100 w-[600px] max-w-full max-h-[700px] p-6 duration-100">
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
              className="mb-3 py-2 border-b-2 border-transparent bg-transparent w-full text-2xl font-bold focus:outline-none focus:border-gray-300"
            />
            <Field
              as="textarea"
              type="description"
              name="description"
              placeholder="Description"
              className="mb-3 py-2  bg-transparent  w-full h-20 focus:outline-none resize-none border-b-2 border-transparent focus:border-gray-300"
            />
            <section className="">
              <div className="flex justify-between space-x-4 mb-3">
                <div className="">
                  <p className="text-gray-400">Status</p>
                  <Field
                    as="select"
                    type="text"
                    name="status"
                    placeholder="Status"
                    className="mb-3 py-2 flex-1 font-bold bg-transparent focus:outline-none border-b-2 border-transparent focus:border-gray-300"
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
                    className="flex-1 mb-3 py-2 bg-transparent focus:outline-none border-b-2 border-transparent focus:border-gray-300 font-bold"
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
                <section className="flex justify-between py-3 px-2 ">
                  <CategoryButton
                    name="Dev"
                    style={{ backgroundColor: "rgb(249, 115, 22)" }}
                  />
                  <CategoryButton name="Design" />
                  <div className="rounded-full bg-lime-500 h-5 w-5 cursor-pointer"></div>
                  <div className="rounded-full bg-emerald-500 h-5 w-5 cursor-pointer"></div>
                  <div className="rounded-full bg-cyan-500 h-5 w-5 cursor-pointer"></div>
                  <div className="rounded-full bg-blue-500 h-5 w-5 cursor-pointer"></div>
                  <div className="rounded-full bg-purple-500 h-5 w-5 cursor-pointer"></div>
                  <div className="rounded-full bg-pink-500 h-5 w-5 cursor-pointer"></div>
                </section>
              </div>
              <div>
                <Field
                  as="select"
                  type="number"
                  name="duration"
                  placeholder="Duration (In Minutes)"
                  className="px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
                >
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                  <option value="90">90</option>
                  <option value="120">120</option>
                </Field>
              </div>
              <div>
                <Field
                  type="checkbox"
                  name="urgent"
                  placeholder="Urgent"
                  className="px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
                />
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
              </div>
            </section>
            <footer className=" flex justify-between items-center mt-16 ">
              <QuestionMarkCircleIcon className="h-7 w-7 text-gray-400 cursor-pointer" />

              <button
                className="flex align-right border-2 rounded-full py-1 px-6 border-black bg-black text-white  transition transform hover:scale-105 duration-100 active:scale-95 ease-in-out font-bold disabled:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white disabled:border-gray-300"
                disabled={!dirty}
                onSubmit={handleClose}
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
