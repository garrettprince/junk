import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../utils/client";
import { Switch } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

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
          <Form className="flex-col">
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className="mb-3 px-4 py-2 bg-transparent rounded-2xl w-full text-2xl font-bold focus:outline-none"
            />
            <Field
              as="textarea"
              type="description"
              name="description"
              placeholder="Description"
              className="mb-3 px-4 py-2 bg-transparent rounded-2xl w-full h-32 focus:outline-none resize-none"
            />
            <div className="flex justify-between space-x-4 mb-3">
              <Field
                as="select"
                type="text"
                name="status"
                placeholder="Status"
                className="flex-1 px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
              >
                <option value="notstarted">Not Started</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
              </Field>
              <Field
                type="date"
                name="dueDate"
                placeholder="Due Date"
                className="flex-1 px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
              />
            </div>
            <Field
              type="text"
              name="category"
              placeholder="Category"
              className="px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
            />
            <div>
              <Field
                type="number"
                name="duration"
                placeholder="Duration (In Minutes)"
                className="px-4 py-2 bg-transparent rounded-2xl focus:outline-none"
              />
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
            <button
              className="disabled:text-gray-300 disabled:border-gray-300 border-2 rounded-full py-1 px-2 border-black hover:bg-black hover:text-white transition"
              disabled={!dirty}
              // onClick={handleClose && submit}
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default AddCardModal;
