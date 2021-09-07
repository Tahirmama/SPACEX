import React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import "./style.css";


interface Props {
    data: LaunchesQuery;
}
const Launch: React.FC<Props> = ({ data }) => {
    return <div className="Head">
        <h3>All <i>SpaceX</i> Launches</h3>
        <ol className="Lnol">
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li key={i} className="LnItm">
                        {launch.mission_name} - {launch.launch_year}
                        ({JSON.stringify(launch.launch_success)})
                                    
                    </li>
                )
            )}
        </ol>
    </div>;
}

export default Launch;