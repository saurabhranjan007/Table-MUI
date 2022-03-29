import React from 'react';
import DataModal from '../components/DataModal';


function Details(props) {
    return(
        <div>
            <DataModal selectedData={props.selectedData}/>
        </div>
    );
}

export default Details;