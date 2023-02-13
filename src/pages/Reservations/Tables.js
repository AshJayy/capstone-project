import React from "react";
import { useState , useEffect } from "react";
import Table from "./components/Table";
import './Tables.css';

function Tables() {

    const [tables, setTables] = useState([]);

    const dimensions = {
        t01s : ["1/ span 1", "1/ span 3"],
        t02s : ["2/ span 1", "1/ span 3"],
        t03s : ["3/ span 1", "1/ span 4"],
        t04s : ["1/ span 1", "6/ span 3"],
        t05s : ["2/ span 1", "6/ span 3"],
        t06s : ["3/ span 1", "7/ span 4"],
        t07s : ["1/ span 2", "11/ span 3"],
        t08c : ["3/ span 1", "13/ span 3"],
        t09s : ["1/ span 1", "16/ span 4"],
        t10c : ["2/ span 1", "15/ span 3"],
        t11c : ["3/ span 1", "18/ span 3"]
    };

    useEffect(() => {
        fetch('table_details.json')
        .then(response => response.json())
        .then(data => setTables(data.tables))
        .catch(error => console.error(error));
    }, []);

    const tableStructure = tables.map((table) => {

        const [col, row] = dimensions["t" + table.no + table.type]

        console.log(col, row);

        return(
            <Table
                key={table.no}
                type={table.type}
                available={table.available}
                value={table.headCount}
                col={col}
                row={row}
            />
        );
    }
    )

    return(
        <div id="tables">
            <h3 className="white" >Pick a table</h3>
            <div>
                {tableStructure}
            </div>
        </div>
    );
}

export default Tables;