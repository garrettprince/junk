import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../utils/client";
import { Switch } from "@headlessui/react";
import { XIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import CategoryButton from "./CategoryButton";
import { motion } from "framer-motion";
import { categoryData, statusTypes, columns } from "../utils/data";

function AddCardModal({ addCard, handleClose }) {
  const [enabled, setEnabled] = useState(false);
  const [category, setCategory] = useState("");
  const [categoryStyle, setCategoryStyle] = useState("");

  const categorySelected = () => {
    if (category === categoryData.dev.title) {
      setCategory('');
    }
  };

  console.log(category);
  

  return (
    <main className="my-auto transition rounded-3xl h-[650px] bg-gray-100 w-[600px] max-w-full max-h-[700px] p-6 duration-100 border-8 border-transparent">
      <header className="flex justify-between items-center mb-6 mx-1">
        <div className="">
          <XIcon className="h-7 w-7 text-transparent" />
        </div>
        <h1 className="font-bold text-[1.7rem]">New Task</h1>
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
          status: "",
        }}
        onSubmit={async (values) => {
          addCard(values);
          // post to supabase
          // call refresh function
          handleClose();
        }}
      >
        {({ values, errors, touched, dirty }) => (
          <Form className="flex-col mx-2">
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className="mb-4 py-2 pl-3 border-b-2 border-transparent bg-transparent w-full text-xl font-bold focus:outline-none focus:bg-gray-200 rounded-xl"
            />
            <Field
              as="textarea"
              type="description"
              name="description"
              placeholder="Description"
              className=" mb-4 mt-1 py-2 pl-3 bg-transparent w-full h-24  focus:outline-none resize-none border-b-2 border-transparent rounded-xl focus:bg-gray-200"
            />
            <section className="">
              <div className="flex justify-between  mb-4 mt-1">
                <div className="">
                  <p className="text-gray-400 ml-3">Status</p>
                  <Field
                    as="select"
                    type="text"
                    name="status"
                    className="p-2 mt-1 mr-2 font-bold bg-transparent focus:bg-gray-200 rounded-xl focus:outline-none"
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
                    className="flex-1 p-2 bg-transparent font-bold focus:bg-gray-200 rounded-xl focus:outline-none"
                  />
                </div>
              </div>
              <div>
                {/* <Field
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="bg-transparent rounded-2xl focus:outline-none"
                /> */}
                <p className="text-gray-400 ml-3">Category</p>
                <section className="flex justify-between py-3 px-1 mb-4 mt-1 mx-3">
                  <CategoryButton
                    key={categoryData.dev.title}
                    name={categoryData.dev.title}
                    color={{ backgroundColor: categoryData.dev.color }}
                    onClick={() => {
                      setCategory(categoryData.dev.title);
                      console.log(category);
                    }}
                    className={`${
                      category === categoryData.dev.title ? "w-20" : "w-10"
                    }`}
                  />
                  <CategoryButton
                    name={categoryData.design.title}
                    color={{ backgroundColor: categoryData.design.color }}
                    onClick={() => setCategory(categoryData.design.title)}
                  />
                  <CategoryButton
                    name={categoryData.lime.title}
                    color={{ backgroundColor: categoryData.lime.color }}
                    onClick={() =>
                      setCategory({ borderColor: categoryData.lime.color })
                    }
                  />
                  <CategoryButton
                    name={categoryData.emerald.title}
                    color={{ backgroundColor: categoryData.emerald.color }}
                    onClick={() =>
                      setCategory({ borderColor: categoryData.emerald.color })
                    }
                  />
                  <CategoryButton
                    name={categoryData.cyan.title}
                    color={{ backgroundColor: categoryData.cyan.color }}
                    onClick={() =>
                      setCategory({ borderColor: categoryData.cyan.color })
                    }
                  />
                  <CategoryButton
                    name={categoryData.blue.title}
                    color={{ backgroundColor: categoryData.blue.color }}
                    onClick={() =>
                      setCategory({ borderColor: categoryData.blue.color })
                    }
                  />
                  <CategoryButton
                    name={categoryData.purple.title}
                    color={{ backgroundColor: categoryData.purple.color }}
                    onClick={() =>
                      setCategory({ borderColor: categoryData.purple.color })
                    }
                  />
                  <CategoryButton
                    name={categoryData.pink.title}
                    color={{ backgroundColor: categoryData.pink.color }}
                    onClick={() =>
                      setCategory({ borderColor: categoryData.pink.color })
                    }
                  />
                </section>
              </div>
              <section className="flex justify-between">
                <div className="flex-col">
                  <p className="text-gray-400 mx-3">Duration (In Minutes)</p>
                  <Field
                    as="select"
                    type="number"
                    name="duration"
                    className="p-2 mt-1  bg-transparent rounded-xl focus:outline-none font-bold focus:bg-gray-200"
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
                  {/* <Field
                    type="checkbox"
                    name="urgent"
                    placeholder="Urgent"
                    className="px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
                  /> */}
                  <div className="flex">
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
