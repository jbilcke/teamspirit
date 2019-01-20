import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PrimaryButton from '../../../presentational/atoms/PrimaryButton';
import SecondaryButton from '../../../presentational/atoms/SecondaryButton';
import Row from '../../../presentational/atoms/Row';
import Col from '../../../presentational/atoms/Col';
import types from '../../../../core/types';
import styles from './styles.module.scss';

// this is our form model, listing editable fields
const fields = {
  strPlayer: {
    label: 'Name',
    type: 'string',
    required: 'Required',
    initial: '',
  },
  strPosition: {
    label: 'Position',
    type: 'string',
    required: 'Required',
    initial: '',
  },
  dateBorn: {
    label: 'Born',
    type: 'string',
    required: null,
    initial: '',
  },
  strNationality: {
    label: 'Nationality',
    type: 'string',
    required: null,
    initial: '',
  },
};


// generate a Yup validation model from fields
const validationSchema = Yup.object().shape(
  Object.entries(fields)
  .reduce((shape, [field, {type, required}]) => ({
    ...shape,
    [field]: required
      ? Yup[type]().required(required)
      : Yup[type](),
  }), {})
);

const PlayerForm = ({ player, onSubmit, onCancel }) =>
  <section className={styles.playerForm}>
    <Formik
      initialValues={
        // use the player data as initial values if present
        // otherwise use initial values from our model
        Object.entries(fields)
        .reduce((defs, [field, {initial}]) => ({
          ...defs,
          [field]: (player && player[field]) || initial
        }), {})
      }
      onSubmit={(values, { setSubmitting }) => {
        const newPlayer = Object.entries(fields)
          .reduce((acc, [key, value]) => ({
          ...acc,
          [key]: values[key],
        }), {
          id: (player && player.id) || null
        });
        onSubmit(newPlayer, player);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
    {props => {
      const {
        values,
        touched,
        errors,
        // dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        // handleReset,
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          {Object.entries(fields).map(([field, {label, type}]) =>
            <Row key={field}>
              <Col className='col-half'>
                <label htmlFor={field} className={styles.label}>
                  {label}
                </label>
                <input
                  id={field}
                  placeholder={`${label}...`}
                  type={
                    // demo: here we could add support for other types
                    type === 'string' ? 'text' : 'text'
                  }
                  value={values[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={[
                    styles.input,
                    errors[field] && touched[field] ? styles.error : '',
                  ].join(' ')}
                />
              </Col>
              <Col className='col-fifth'>
                {errors[field] &&
                  touched[field] &&
                  <div className={styles.feedback}>{errors[field]}</div>
                }
              </Col>
            </Row>
          )}
          <div>
            <SecondaryButton
              type="button"
              className={styles.cancel}
              onClick={onCancel}>
              Cancel
            </SecondaryButton>
            <PrimaryButton
              type="submit"
              disabled={isSubmitting}
              className={styles.submit}>
              Submit
            </PrimaryButton>
          </div>
        </form>);
      }}
    </Formik>
  </section>;

PlayerForm.propTypes = {
  player: types.Player,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default PlayerForm;
