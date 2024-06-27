import React,{useState} from "react";
import './Billing.css';

function Billing(){
    const [rows,setRows] = useState([
        {id:1,item:'',quantity:0,price:0,pricekgpc:0}
    ]);
    const [Total,setTotal] = useState(0);
    const handleChange = (index,key,value)=>{
        const Updatedrows = [...rows];
        Updatedrows[index][key] = value;
        Updatedrows[index]['price'] = Updatedrows[index]['quantity'] * Updatedrows[index]['pricekgpc'];
        var tot = 0;
        for(var i=0;i<rows.length;i++){
            tot+=Updatedrows[i]['price'];
        }
        setTotal(tot);
        setRows(Updatedrows);

        if(index===rows.length-1){
            addRow();
        }
    }
    const addGST18 = ()=>{
        setTotal(Total*1.18);
    };
    const addGST24 = ()=>{setTotal(Total*1.24);};
    const addRow = ()=>{
        const newRow = {id:rows.length+1,item:'',quantity:0,price:0,pricekgpc:0};
        const Updatedrows = [...rows,newRow];
        setRows(Updatedrows);

    };
    const RemoveRow = (index)=>{
        const Updatedrows = rows.filter((_,rowIndex)=>rowIndex !== index);
        setRows(Updatedrows);
    }
    return(
        <div className="Billing">
        <div className="BillingBody">
            
        <table className="tableclass">
            <thead>
                <th>S.No</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price Per Kg/Pc</th>
                <th>Price</th>
            </thead>
            <tbody className="scrollable-tbody">
                {rows.map((row,index)=>(
                    <tr key={row.id} className="billingrow" onDoubleClick={()=>RemoveRow(index)}>
                        <td>
                            <input 
                                type = "text"
                                className="sno"
                                value={row.id}
                                onChange={(e)=>handleChange(index,'sno',e.target.value)}
                            />
                        </td>
                        <td>
                            <input 
                                type = "text"
                                value={row.item}
                                onChange={(e)=>handleChange(index,'item',e.target.value)}
                            />
                        </td>
                        <td>
                            <input 
                                type = "text"
                                value={row.quantity}
                                onChange={(e)=>handleChange(index,'quantity',e.target.value)}
                            />
                        </td>
                        <td>
                            <input 
                                type = "text"
                                value={row.pricekgpc}
                                onChange={(e)=>handleChange(index,'pricekgpc',e.target.value)}
                            />
                        </td>
                        <td>
                            <input 
                                type = "text"
                                value={row.price}
                                onChange={(e)=>handleChange(index,'price',e.target.value)}
                            />
                        </td>
                        </tr>
                ))}
            </tbody>
        </table>
        <div className="buttonclass">
        <button  onClick={addRow}>Add Item</button>
        <button onClick={addGST24}> Add GST 24%</button>
        <button onClick={addGST18}>Add GST 18%</button>
        </div>
        <h2>Total :{Total}</h2>
        <p>Thanks!visit again</p>
        </div>
        </div>
    )
}

export default Billing;