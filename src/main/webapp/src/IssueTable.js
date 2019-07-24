import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' }
        ],
        data: [
            { name: 'Mehmet' },
            { name: 'Zerya Betül' }
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
}