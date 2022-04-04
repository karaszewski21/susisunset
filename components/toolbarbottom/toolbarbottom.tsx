import styles from './Toolbarbottom.module.scss';
import Select from 'react-dropdown-select';

export default function ToolbarBottom() {
  const openList = (values: any[]) => {
    console.log('open list', values[0]);
  };

  return (
    <div className={styles.toolbarBottom}>
      <span className="material-icons-outlined">widgets</span>
      <Select
        options={[
          { id: 1, label: 'dupa', value: 'dupa xxx' },
          { id: 2, label: 'jadzia', value: 'jadzia xxx' },
        ]}
        searchable={false}
        dropdownHandle={false}
        dropdownPosition="top"
        values={[]}
        onChange={(value) => openList(value)}
      />
    </div>
  );
}
