import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ToolBar from './content/ToolBar';
import NestedList from './content/NestedList';
import TableComponent from './content/TableComponent';
import Grid from '@mui/material/Grid';

const initialRows = [
  { id: 1, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67 },
  { id: 2, name: 'Donut', calories: 452, fat: 25.0, carbs: 51 },
  { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 23 },
  { id: 4, name: 'Frozen yogurt', calories: 159, fat: 6.0, carbs: 24 },
  { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49 },
  { id: 6, name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87 },
  { id: 7, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37 },
  { id: 8, name: 'Jelly Bean', calories: 375, fat: 0.0, carbs: 94 },
  { id: 9, name: 'KitKat', calories: 518, fat: 26.0, carbs: 65 },
  { id: 10, name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98 },
  { id: 11, name: 'Marshmallow', calories: 318, fat: 0, carbs: 81 },
];

function FileManagerPage() {
  const { t } = useTranslation('examplePage');
  const [isNestedListOpen, setIsNestedListOpen] = useState(true);

  return (
    <div>
      <ToolBar />
      <Grid container spacing={0} sx={{ border: '1px solid', borderColor: 'divider' }}>
        <Grid item xs={3} sx={{ borderRight: '1px solid', borderColor: 'divider', backgroundColor: 'white' }}>
          {isNestedListOpen && <NestedList />}
        </Grid>
        <Grid item xs={9}>
          <TableComponent rows={initialRows} />
        </Grid>
      </Grid>
    </div>
  );
}

export default FileManagerPage;

