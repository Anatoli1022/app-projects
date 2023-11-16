import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item, i) => {
        return (
          <EmployeesListItem
            key={i}
            {...item}
            onDelete={() => onDelete(item.id)}
            onToggleIncrease={() => onToggleIncrease(item.id)}
            onToggleRise={() => onToggleRise(item.id)}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
