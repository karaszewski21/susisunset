import { useState } from 'react';
import styles from './rightPanel.module.scss';

export default function RightPanel() {
  const [wrap, setWrap] = useState({ open: true, className: '' });
  const wrapContent = () => {
    if (wrap.open) {
      setWrap({ open: false, className: styles.wrap });
    } else {
      setWrap({ open: true, className: '' });
    }
  };

  return (
    <div className={[styles.rightPanelContent, wrap.className].join(' ')}>
      <button onClick={wrapContent}>ok</button>
      <div>dddd</div>
      <div>dddd</div>
    </div>
  );
}
