import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

function AddCardModal() {
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
          }}
          onSubmit={async (values) => {
            // post to supabase
            console.log(values);
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
                    <Field type="number" name="duration" placeholder="Duration" />
                  </div>
                  <div>
                    <Field type="checkbox" name="urgent" placeholder="Urgent" />
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
