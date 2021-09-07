import React from 'react';
import {useLaunchesQuery} from "../../generated/graphql";
import Launch from "./Launch";


interface OwnProps {
  id: number;
}
const Launch_Container = ()=>{
    const{ data , error , loading }= useLaunchesQuery();
    
    if(error || !data){
        return<div>ERROR! </div>
    }
    return <Launch data={data} />
}

export default Launch_Container