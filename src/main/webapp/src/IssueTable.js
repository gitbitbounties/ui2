/*import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Issue Name', field: 'name' }
        ],
        data: [
            { name: 'Issue foo' },
            { name: 'Issue bar' }
        ],
    });

    return (
        <MaterialTable
            title="Flag Issues"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    })
            }}
        />
    );
} */

import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            {
                title: 'Bounty',
                field: 'birthCity',
                lookup: { 34: '750', 63: '200' },
            },
        ],
        data: [
            { name: 'Issue foo', birthCity: 63 },
            {
                name: 'Issue bar',
                birthCity: 34,
            },
        ],
    });

    return (
        <MaterialTable
            title="Flag Issues"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
            }}
        />
    );
}

