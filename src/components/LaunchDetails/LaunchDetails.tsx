import React from "react";
import { LaunchInfoQuery } from "../../generated/graphql";
import "./style.css"


interface Props {
    data: LaunchInfoQuery
}
const LaunchDetails: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return (
            <div>
                SORRY!
                <br />LAUNCH UNAVAILABLE
            </div>
        );
    }
    return (
        <div className="Info">
            <div className="Details">
                <span>
                    Flight Number: {data.launch.flight_number}
                </span>
                <h1>
                    {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
                </h1>
                <p>
                    Launched From:
                    {data.launch.launch_site?.site_name}
                    in
                    {data.launch.launch_year}
                </p>
                <p>
                    {data.launch.details}
                </p>
                {!!data.launch.links && !!data.launch.links.flickr_images && (
                    <div>
                        {data.launch.links.flickr_images.map(
                            image =>
                                image ? <img src={image} key={image} className= "Image" alt="RocketImages"/> : null
                        )}
                    </div>
                )}
            </div>
        </div>
    )
};

export default LaunchDetails;