import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import DataModal from "./DataModal"


function TableMUI() {
    const [selectedData, setSelectedData] = useState({})

    // defining the column section of the table 
    const columns = [
        {field: "id", headerName: "ID", width: 100},
        {field: "name", headerName: "Name", width: 200},
        {field: "username", headerName: "User Name", width: 200},
        {field: "email", headerName: "Email", width: 250},
        {field: "phone", headerName: "Phone", width: 250},
        {field: "website", headerName: "Website", width: 200}, 

        {
            field: "address",
            headerName: "Street Name",
            width: 150,
            renderCell: (params) => {
              return <div>{params.row.address.street}</div>;
            },
       },

       {
            field: "address",
            headerName: "City Name",
            width: 150,
            renderCell: (params) => {
            return <div>{params.row.address.city}</div>;
            },
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            sortable: false,
            renderCell: (params) => {
                    const onClick = (x) => {
                        const thisRow = {};
                        // console.log('params.api.getAllColumns(): ', params.api.getAllColumns())

                        params.api.getAllColumns()
                            .forEach((c) => {
                                thisRow[c.field] = params.getValue(params.id, c.field)
                                // console.log(c.field , ':',params.getValue(params.id, c.field))
                            });
                            setSelectedData(thisRow)
                        };

                return <div onClick={onClick}><DataModal selectedData={selectedData}/></div>
                },
            }      
    ]

    // fetching data from the API and setting it to tableData to be shown in the row section of the table
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setTableData(data))
        .catch(error => console.log("Error =>", error)); 
    }, [])

    // Dependency array: it basically controls when the hook gets triggered (If any variable is used inside a hook and is defined outside, then it goes in the dependency array). 
    //   In case there's a variable in the dependency array. It means run the callback function everytime the given variable changes.
    //   In case of an empty dependency array, it simply means that hook will get triggered only once when the component first gets rendered. 

    return(

        <div style={{height: 650, width: '90%', textAlign: "center"}}>

            <DataGrid 
                rows={tableData}
                columns={columns}
                pageSize={10}
                initialState={{
                    sorting: {
                        sortModel: [{ field: '', sort: 'asc'}],
                    },
                    filter: {
                        filterModel: {
                            items: [{ columnField: '', operatorValue: '>', value: '' }],
                        },
                    },
                }}
            />
        </div>
    );
}

export default TableMUI;
