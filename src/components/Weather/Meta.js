import React from 'react';
import styles from './Meta.css';
import Text from 'components/Text2';

const Meta = ({
  title,
  value,
}) => (
  <div className={styles.meta}>
    <Text className={styles.title}>{title}</Text>
    <br />
    <Text className={styles.value}>{value}</Text>
  </div>
);

export default Meta;
