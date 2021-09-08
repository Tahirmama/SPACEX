import React from 'react';
import {useLaunchesQuery} from "../../generated/graphql";
import Launch , { OwnProps } from "./Launch";




const Launch_Container : React.FC<OwnProps> = (props)=>{
    const{ data , error }= useLaunchesQuery()
   
    
    if(error || !data){
        return<div>ERROR! </div>
    }
    return <Launch data={data}{...props} />
}

export default Launch_Container