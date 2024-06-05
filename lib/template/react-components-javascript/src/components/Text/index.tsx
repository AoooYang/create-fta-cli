import React from 'react';
import * as styles from './styles/index.module.scss';
import type { TextProps } from './interface';
export default function Text(props: TextProps) {
  const { text } = props;
  return (
    <>
      <div className={styles.title}>{text}</div>
    </>
  );
}
export { TextProps };
