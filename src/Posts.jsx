import React,{useState,useEffect} from 'react'

const getData = async (page) =>{
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      let data =await res.json()
      return data;
}

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [page,setPage] = useState(1);
    // const [itemsPerPage] = useState(10);

    //1 --> 1-10
    //2 --> 11-20   
    //3 --> 21-30
    //4 ---> 31-40
    //5--> 41-50
    //6--> 51-60
    //7--> 61-70
    //8--> 71-80  (8*10)-9  8*10
    //(page*itemsPerPage)-9 ,page*itemsPerPage


    // const perPage = posts.slice(1,11);
    // setPosts(perPage);
    
const handlePageChange =(x) => {
  page>= 1 ? (setPage(page + x))  : setPage(1) ;

}


      

    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res)=>res.json())
    //   .then((data)=>{setPosts(data);})
    // },[]);

    useEffect(()=>{
      fetchAndUpdateData(page)
    },[page]);
    const fetchAndUpdateData =  async(page=1,itemsPerPage=10) => {
       try{
          setIsLoading(true);
          const data = await getData(page);
         const finalData =  data.slice((page*itemsPerPage)-9,page*itemsPerPage)
          setPosts(finalData);
          setIsLoading(false);
       }catch(e){
        setIsLoading(false);
          console.log(e.message);
       }
    }

    
    
    
    // const getFetchUpdatedData =async() => {
    //        const data = await getData();
    //        setPosts(data);
    // }

    if(isLoading){
      return <h1>Loading....</h1>
    }

  return (
    <>
       <h1>Posts</h1>
       {/* <button onClick={getFetchUpdatedData}>get posts</button> */}
       <ul style={{listStyleType:'none'}}>
         {posts.map((eachItem)=> <li key={eachItem.id}  >{eachItem.id}---{eachItem.title}</li>)}
      </ul>
      <div>
      <button onClick={()=>{handlePageChange(-1)}}>Prev</button>
      <button>{page}</button>
      <button onClick={()=>{handlePageChange(+1)}}>Next</button>
      </div>
    </>
  )
}

export default Posts