import React from "react";



const component=({datas})=>
{  let c=0;
    return(
        <div >
            <table >
                <thead>
                    <tr>
                    <th>Move</th>
                    <th>Player</th>
                    <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    { datas.map((data,index)=>(
                       
                    <tr key={index}>
                     
                    <td>{datas[c++]}</td>
                    <td>{datas[c++]}</td>
                    <td>{datas[c++]}</td>
                  
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default component;