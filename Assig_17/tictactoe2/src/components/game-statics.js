import React from "react";



const component=({stati})=>
{  let h=0;
    return(
        <div className="static-table" style={{display:"flex",alignItems:"center",border:"1px solid black",borderCollapse:"collapse",marginLeft:"100px"}}>
            <p>
            <table >
                <thead>
                    <tr>
                    <th>Played</th>
                    <th>X wins</th>
                    <th>O wins</th>
                    <th>Draw</th>
                    </tr>
                </thead>
                <tbody>
                    { stati.map((data,index)=>(
                       
                    <tr key={index}>
                     
                    <td>{stati[h++]}</td>
                    <td>{stati[h++]}</td>
                    <td>{stati[h++]}</td>
                    <td>{stati[h++]}</td>
                  
                    </tr>
                    ))
                    }
                </tbody>
            </table>
            </p>
        </div>
    )
}

export default component;