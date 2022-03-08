import React,{useState,useEffect} from 'react';

function App() {
    
    const [todo, settodo] = useState([]);
    const [initialvalue, setinitialvalue] = useState('');
    useEffect(() => {
        let len = todo.length;
        if(len>0)
            document.title = `TO do(${len})`;
        else
            document.title = `TO do`;    

    }, [todo])
    
    const changevalue = (e) =>{
        setinitialvalue(e.target.value);
    }
    const add = ()=>{
        if(initialvalue.length>0){
            let array = todo.filter((ele)=>{
                return initialvalue===ele;
            })
            if(array.length==0){       
                settodo([...todo,initialvalue]);
                setinitialvalue('');
                console.log(todo);
            }
            else{
                alert("work is already added");
                setinitialvalue('');
            }
        
        }
        else{
            alert("please fill to do");
        }
    }

    const del = (el) =>{
        let myarr = todo.filter((elem)=>{
            return elem!==el
        })
        settodo(myarr);
    }

    return (
        <>
         To do:  <input type = "text" name = "to do" value={initialvalue} placeholder='enter to do here' onChange={changevalue}/>  <br/>
         <button type="submit" onClick={add}>Add</button> <br />
         {
            todo.length>0 && <h1> TO DO WORK : </h1>
         }
         {todo.map((cur)=>{
             return <>
             <h1 style={{display:"inline-block",marginRight:"20px"}}>{cur}</h1>
             <button type="submit" onClick={()=>del(cur)}>delete</button><br />
             </>
            
         })}
        </>
    );
}

export default App;