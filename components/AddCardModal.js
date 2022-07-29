import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../utils/client";
import { Switch } from "@headlessui/react";
import { XCircleIcon, XIcon } from "@heroicons/react/solid";

function AddCardModal({ addCard, handleClose }) {
  const [enabled, setEnabled] = useState(false);

  return (
      <main className="my-auto transition-all rounded-2xl h-[500px] bg-gray-100 w-[600px] max-w-full max-h-[700px] p-6">
        {/* <div className="relative inset-0 z-20 max-w-2xl transform overflow-scroll rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all"> */}
        <h1 className="flex justify-center font-bold text-3xl mb-6">New Task</h1>
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
              <div>
                <Field
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="px-4 py-2 bg-transparent rounded-2xl"
                />
              </div>
              <div>
                <Field
                  type="description"
                  name="description"
                  placeholder="Description"
                  className="px-4 py-2 bg-transparent rounded-2xl"
                />
              </div>
              <div>
                <Field
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="px-4 py-2 bg-transparent rounded-2xl"
                />
              </div>
              <div>
                <Field
                  type="date"
                  name="dueDate"
                  placeholder="Due Date"
                  className="px-4 py-2 bg-transparent rounded-2xl"
                />
              </div>
              <div>
                <Field
                  type="number"
                  name="duration"
                  placeholder="Duration"
                  className="px-4 py-2 bg-transparent rounded-2xl"
                />
              </div>
              <div>
                <Field
                  type="checkbox"
                  name="urgent"
                  placeholder="Urgent"
                  className="px-4 py-2 bg-transparent rounded-2xl"
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
        <button className="border border-black relative right-0 top-0 mr-8 mt-8">
          <XIcon className="h-7 w-7" onClick={handleClose} />
        </button>
        {/* </div> */}
      </main>
  );
}

export default AddCardModal;
