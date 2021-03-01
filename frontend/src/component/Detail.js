import React from 'react';

const Detail=(props)=>{
    console.log(props.value[props.index].name)
    return (
        <>
        <div style={{position:"absolute",top:"10px",right:"250px",height:"150px",width:"250px",border:"1px solid  #f1f1c1",backgroundColor:"#808080",color:"white"}}>
            <div>Name {props.value[props.index].name}</div>
            <div>Class {props.value[props.index].class}</div>
            <div>Age {props.value[props.index].age}</div>
            <div>Gender {props.value[props.index].gender}</div>
            <div>Sports {props.value[props.index].sports}</div>
            <div>{props.value[props.index].name}</div>
        </div>
        </>
    )
}
export default Detail;