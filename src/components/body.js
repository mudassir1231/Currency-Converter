
const Body = () => {
    let name ='mehak';

    const click = (x) =>{
        console.log('this is console '+x); 
        name ='nooreain';}

        
    const change = () =>{
        name ='nooreain';
        console.log('name has changed to '+name);
        document.getElementById('namee').innerHTML=name; 
        }
   
   return (

        <div classNameName="body">

            <h6>This is body</h6>
            <h2 id="namee">{name}</h2> 
            <button onClick={()=>{change()}}>change</button>
            <button onClick={()=>{click('maaz')}}>click me</button>
        </div>


      );
}
 
export default Body;