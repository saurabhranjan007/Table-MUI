// using Bootstrap.. 

import React from "react";
import { useEffect, useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css"
// import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter-min.css";
// import PersonDetails from "./PersonDetails";
// import Users from "./Users";


function Tables() {

    const [userList, setUserList] = useState([]);
    
    // Re-defining the columns section of the table to render the table thro Bootstrap..
    // In order to use the sort method to sort the data in asc/des order.

    const columns = [
        {dataField: "id", text: "ID", sort: true},
        {dataField: "name", text: "Name", sort: true, filter: textFilter()},
        {dataField: "username", text: "User Name", sort: true, filter: textFilter()},
        // {dataField: "email", text: "Email"},
        {dataField: "phone", text: "Phone"},
        {dataField: "website", text: "Website"},
        {dataField: "address.city", text: "City", sort: true, filter: textFilter()},
        {dataField: "company.name", text: "Company", sort: true, filter: textFilter()},
        {dataField: "details", text: "Action"}
    ]

    // columns.push({dataField: "<button>details</button>", text: "Details" })
    // const details = <button>details..</button>;


    // defining the pagnation part of the page.. 

    const pagination = paginationFactory([

        {page: 1},
        {sizePerPage: 10},
        // {firstPageText: "<<"},
        // {lastPageText: ">>"},
        // {nextPageText: ">"},
        // {prePageText: "<"},
        // {showTotal: true},
        // {alwaysShowAllBtns: true},
        // {onPageChange: function(page, sizePerPage) {
        //     console.log("page", page);
        //     console.log("sizePerPage", sizePerPage);
        // }},
        // {onSizePerPageChange: function(page, sizePerPage) {
        //     console.log("page", page);
        //     console.log("sizePerPage", sizePerPage);
        // }}

    ]);


    // fetching the data from JSON Placeholder API

    useEffect(() => {
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(result => setUserList(result))
        .catch(error => console.log(error)); 

    }, [])


    // Adding data in JSON object

    function result() {
        result.dataField = <button>details</button>;
        userList.innerHTML = JSON.stringify(result);
    };

    return(
        <div>

        {/* rendering the table thro BootstrapTable componenet */}

        <BootstrapTable
            keyField="id" 
            columns={columns} 
            data={userList}
            // newData = {userList.map(x =>(<button>details..{x.action}</button>))}
            bootstrap4
            pagination={pagination}
            filter={filterFactory()}
            // details={details}    
        />

            {/* {columns.map(x => (
                <button>details {x.action}</button>
            ))} */}


        </div>
    );
}

export default Tables;
