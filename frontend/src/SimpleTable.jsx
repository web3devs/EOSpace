import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: 400,
    height: 200,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 400,
    width: 400,
    height: 200,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function SimpleTable(props) {
  console.log('PROPS', props);
  const { classes } = props;

return (
   <Paper className={classes.root}>
     <Table className={classes.table}>
       <TableHead>
         <TableRow>
           {/* <TableCell>Dessert (100g serving)</TableCell> */}
           <TableCell numeric>UserName</TableCell>
           <TableCell numeric>Vote</TableCell>
           <TableCell numeric>Data</TableCell>
           {/* <TableCell numeric>Protein (g)</TableCell> */}
         </TableRow>
       </TableHead>
       <TableBody>
         {props.rows.map(row => {
           return (
             <TableRow key={row.id}>
               {/* <TableCell component="th" scope="row">
                 {row.name}
               </TableCell> */}
               <TableCell numeric>{row.userName}</TableCell>
               <TableCell numeric>{row.vote}</TableCell>
               <TableCell numeric>{row.data}</TableCell>
               {/* <TableCell numeric>{row.protein}</TableCell> */}
             </TableRow>
           );
         })}
       </TableBody>
     </Table>
   </Paper>
 );
}

SimpleTable.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
