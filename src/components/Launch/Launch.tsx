import React from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import "./style.css";


export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
    data: LaunchesQuery;
}
const Launch: React.FC<Props> = ({ data, handleIdChange }) => {
    return <div className="Head">
        <h3>All <i>SpaceX</i> Launches</h3>
        <ol className="Lnol">
            {!!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                    <li key={i}
                        className="LnItm"
                        onClick={() => handleIdChange(launch.flight_number!)}
                    >
                        {launch.mission_name} - {launch.launch_year}
                        ({JSON.stringify(launch.launch_success)})

                    </li>
                )
            )}
        </ol>
    </div>;
}

export default Launch;