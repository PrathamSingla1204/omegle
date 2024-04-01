import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

export const Room = ()=>
{
   const [searchParams,setSeacrchParams] = useSearchParams();
   const name = searchParams.get('name');

   useEffect(() =>{

   },[name])
   return <div>
    Hi {name}
   </div>
}