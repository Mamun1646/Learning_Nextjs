import { useRouter } from "next/router";
const Dynamic =()=>{
    const router =useRouter();
    const {id}=router.query;
    return(
        <div>
       <h1>Hello Mamun  : {id}</h1>
        </div>
    );
}
export default Dynamic;