import React, { useEffect } from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchDetails from "./LaunchDetails";

interface OwnProps {
    id: number;
}



const Launch_Details_Container: React.FC<OwnProps> = ({ id }) => {
    const { data, error, loading, refetch } = useLaunchInfoQuery(
        {
            variables: { id: String(id) }
        });

useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);
  
    if (loading) {
        return <div className="load" >WAIT A MINUTE IT'S LOADING...</div>
    }
    if (error) {
        return <div>ERROR! </div>
    }
    if (!data) {
        return <div>There is no data . Please select amission for it's details....</div>
    }
    return <LaunchDetails data={data} />
}

export default Launch_Details_Container;
