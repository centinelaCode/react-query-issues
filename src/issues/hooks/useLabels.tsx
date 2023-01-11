import { useQuery } from "@tanstack/react-query";
import { Label } from "../interfaces/label";
import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";


const getLabels = async():Promise<Label[]> => {

   await sleep(2);

   const { data} = await githubApi.get<Label[]>('/labels');    
   // console.log(data);
 
   return data;
 }

export const useLabels = () => {
   const laberlQuery = useQuery(
      ['labels'],
      getLabels,
      {
        refetchOnWindowFocus: true,
        staleTime: 1000 * 60 * 60,
      }
   );

   return laberlQuery;
}