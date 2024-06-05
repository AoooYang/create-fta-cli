import React from 'react';
import * as styles from './styles/index.module.scss';
import type { HelloProps } from './interface';
export default function Hello(props: HelloProps) {
  const { text } = props;
  return (
    <>
      <div className={styles.title}>{text}</div>
    </>
  );
}
export { HelloProps };
