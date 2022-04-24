import { Formik, Form, Field, useFormikContext } from 'formik';
import DummyPrints from 'DummyPrints';
import { useState, useEffect, ReactElement } from 'react';
import ModelViewer from 'components/ModelViewer';

import './Form.css';

type Printable = typeof DummyPrints[0];

enum FilamentColor {
  Red = 'Red',
  Blue = 'Blue',
}

interface FormValues {
  model: number;
  filamentColor: FilamentColor;
}

const ModelProvider = ({
  render,
}: {
  render: (model: Printable) => ReactElement;
}) => {
  const { model: idx } = useFormikContext().values;

  const [model, setModel] = useState<Printable>();

  useEffect(() => setModel(DummyPrints[+idx]), [idx]);
  return model ? render(model) : <></>;
};

const Print = () => {
  return (
    <>
      <h1>Print a Part</h1>
      <Formik
        initialValues={{ model: '0' }}
        validate={(values: FormValues) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <div>
                <label>
                  <h3>Load model</h3>
                  <Field as="select" name="model">
                    {DummyPrints.map((p, i) => (
                      <option value={i}>{p.filename}</option>
                    ))}
                  </Field>
                </label>
              </div>
              <div>
                <Field as="select" name="filamentColor">
                  {Object.entries(FilamentColor).map(([i, color]) => (
                    <option value={i}>{color}</option>
                  ))}
                </Field>
              </div>
              <div>
                <ModelProvider
                  render={(model) => (
                    <p>
                      <b>Estimated print time: {model.hoursToPrint} hours</b>
                    </p>
                  )}
                />
                <button type="submit" disabled={isSubmitting}>
                  Queue Print
                </button>
              </div>
            </div>
            <div>
              <h3>Model preview</h3>
              <ModelProvider
                render={(model) => (
                  <ModelViewer image={model.image} filename={model.filename} />
                )}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Print;
