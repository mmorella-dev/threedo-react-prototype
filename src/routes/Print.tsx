/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field, useFormikContext } from 'formik';
import DummyPrints from 'DummyPrints';
import { useState, useEffect, ReactElement } from 'react';
import ModelViewer from 'components/ModelViewer';

import './Form.css';

type Printable = typeof DummyPrints[0];

/** Get the selected model out of the form */
const ModelProvider = ({
  render,
}: {
  render: (model: Printable) => ReactElement;
}) => {
  const { modelNumber: idx } = useFormikContext<FormValues>().values;

  const [model, setModel] = useState<Printable>();

  useEffect(() => setModel(DummyPrints[+idx]), [idx]);
  return model ? render(model) : <></>;
};

enum FilamentColor {
  White = 'White',
  Pink = 'Pink',
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
  Yellow = 'Yellow',
  Transparent = 'Yellow',
  Luminsecent = 'Luminescent',
}

enum FilamentType {
  PLA = 'PLA',
  ABS = 'ABS',
  PETG = 'PETG',
  FLEX = 'FLEX',
}

interface FormValues {
  modelNumber: number;
  filamentColor: FilamentColor;
  filamentType: FilamentType;
  fillDensity: number;
  vaseMode: boolean;
}

const FormFunction = ({ isSubmitting }: { isSubmitting: boolean }) => {};

const timeEstimate = (
  modelNumber: number,
  fillDensity: number,
  vaseMode: boolean
) =>
  (vaseMode ? 0.3 : 1) * DummyPrints[modelNumber].hoursToPrint +
  0.1 * fillDensity;

const TimeEstimator = () => {
  const { values }: { values: FormValues } = useFormikContext<FormValues>();

  return (
    <b>
      Estimated print time:{' '}
      {timeEstimate(
        values.modelNumber,
        values.fillDensity,
        values.vaseMode
      ).toFixed(1)}{' '}
      hours
    </b>
  );
};

const Print = ({ onAddJob }: PrintProps) => (
  <>
    <h1>Print a Part</h1>
    <Formik<FormValues>
      initialValues={{ modelNumber: 0, fillDensity: 1, vaseMode: false }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(true);
          const output = {
            estimated: timeEstimate(
              values.modelNumber,
              values.fillDensity,
              values.vaseMode
            ),
            ...values,
          };
          setSubmitting(false);
          if (onAddJob) {
            onAddJob(output.estimated);
          }
        }, 400);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <section>
              <label>
                <h3>Load model</h3>
                <Field as="select" name="modelNumber">
                  {DummyPrints.map((p, i) => (
                    <option value={i}>{p.filename}</option>
                  ))}
                </Field>
              </label>
              <label>
                <h3>Select filament color</h3>
                <Field as="select" name="filamentColor">
                  {Object.entries(FilamentColor).map(([i, color]) => (
                    <option value={i}>{color}</option>
                  ))}
                </Field>
              </label>
              <label>
                <b>Vase mode</b> <Field type="checkbox" name="vaseMode" />
              </label>
              <label>
                <b>Scaffolds</b> <Field type="checkbox" name="scaffolds" />
              </label>
              <label>
                <b>Fill density</b> 1{' '}
                <Field type="range" name="fillDensity" min="1" max="5" /> 5
              </label>
              <TimeEstimator />
              <button type="submit" disabled={isSubmitting}>
                Queue Print
              </button>
            </section>
            <section>
              <h3>Model preview</h3>
              <ModelProvider
                render={(model) => (
                  <ModelViewer image={model.image} filename={model.filename} />
                )}
              />
            </section>
          </Form>
        );
      }}
    </Formik>
  </>
);

type PrintProps = {
  onAddJob: (hours: number) => void | undefined;
};

export default Print;
