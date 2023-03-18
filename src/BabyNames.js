import React from "react";

function BabyNames(props){
    
    return(
        <section className='nameContainer'>
            {props.names.sort((a,b)=>(a.name > b.name? 1:-1)).map((eachName)=>(<p key = {eachName.id} className = {eachName.sex ==='m' ? 'boyNames' :'girlNames'}>{eachName.name}</p>))}
        </section>
    )
}

export default BabyNames;