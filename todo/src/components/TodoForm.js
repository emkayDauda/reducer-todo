import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";


const initialValue = {item: ""}
export default function TodoForm({onSubmit}) {
  return (
    <Formik
    initialValues={initialValue}
      onSubmit={onSubmit}
      render={props => {
        return (
          <Form>
            <div>
                <label>
                    New Todo
                    <Field name='item' type='text' placeholder='Todo' />
                    <ErrorMessage name='item' component='div' />
                </label>
            </div>
            <button type="submit">Add Item</button>
          </Form>
        );
      }}
    ></Formik>
  );
}
