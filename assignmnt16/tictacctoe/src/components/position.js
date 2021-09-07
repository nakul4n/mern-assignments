import React from "react";

const component=(props)=>
{
    return(
        <div>
            <table>
                <thead>
                    <th>move</th>
                    <th>player</th>
                    <th>position</th>
                </thead>
                <tbody>
                    { props.datas.map((data,index)=>(
                    <tr>
                    <td>{index+1}</td>
                    <td>{props.player}</td>
                    <td>{props.position}</td>
                  
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default component;