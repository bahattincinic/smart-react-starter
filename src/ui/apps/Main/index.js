import React from 'react';

import Link from 'ui/common/Link';

import styles from './style.less';


export default function Main() {
  return (
    <div className={styles.root}>
      <div>
        {"It's a main component"}
      </div>
      <Link to="//www.smarteducation.net">
        {"It's a common component"}
      </Link>
    </div>
  );
}
