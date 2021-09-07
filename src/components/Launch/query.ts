import { gql } from "@apollo/client";


export const Query_Launch = gql`
query launches{  
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
    }
  }
`;  