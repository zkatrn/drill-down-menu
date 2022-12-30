import * as React from 'react';
import './style.css';
import DrillDownMenu from './components/drill-down-menu';
import { menuItems } from './menu-items';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <DrillDownMenu items={menuItems} />
    </div>
  );
}
