import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../utils/client";
import { Switch } from "@headlessui/react";

function AddCardModal({ addCard }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",
            category: "",
            dueDate: "",
            duration: "",
            urgent: false,
            status: 'Not Started' //TODO: change to using statusTypes
          }}
          onSubmit={async (values) => {
            addCard(values)
            // post to supabase
            // call refresh function
          }}
        >
          {({ values, errors, touched, dirty }) => (
            <div className="flex w-88 bg-slate-400">
              <section className="fixed inset-x-0">
                <Form className="flex-col">
                  <div>
                    <Field type="text" name="title" placeholder="Title" />
                  </div>
                  <div>
                    <Field
                      type="description"
                      name="description"
                      placeholder="Description"
                    />
                  </div>
                  <div>
                    <Field type="text" name="category" placeholder="Category" />
                  </div>
                  <div>
                    <Field type="date" name="dueDate" placeholder="Due Date" />
                  </div>
                  <div>
                    <Field
                      type="number"
                      name="duration"
                      placeholder="Duration"
                    />
                  </div>
                  <div>
                    <Field type="checkbox" name="urgent" placeholder="Urgent" />
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
                    className="disabled:text-gray-300 disabled:border-gray-300 border-2 rounded-full py-1 px-2 border-black"
                    disabled={!dirty}
                  >
                    Submit
                  </button>
                </Form>
              </section>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddCardModal;
