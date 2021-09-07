import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchDetails from "./LaunchDetails";

const Launch_Details_Container = () =>{

const {data,error,loading} =  useLaunchInfoQuery({variables:{id : "13"}});

   
if (loading){
    return<div className="load" >WAIT A MINUTE IT'S LOADING...</div>
}
if(error){
    return<div>ERROR! </div>
}
if(!data){
    return<div>There is no data . Please select amission for it's details....</div>
}
return <LaunchDetails data={data} />
}

export default Launch_Details_Container;
