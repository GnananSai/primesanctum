import { Await, useLoaderData } from 'react-router-dom';
import Card from '../../components/card/card';
import Filter from '../../components/filter/Filter';
import List from '../../components/list/list';
import Map from '../../components/map/map';
import { listData } from '../../lib/dummydata'
import './listPage.scss'
import { Suspense } from 'react';
import LoadingSpinner from '../../components/loading/loading';


function ListPage(){
    const data= useLoaderData();


    return(
     <div className="listPage">

    <div className="listContainer">
        <div className="wrapper">
            <Filter/>
           <Suspense fallback={<p>Loading...</p>}>
           <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading posts!</p>
          }
        >
          {(postResponse) => postResponse.data.map(post=>(
            <Card key={post.id} item={post}/>
          ))}
        </Await>

           </Suspense>

        </div>
    </div>
    <div className="mapContainer">
    <Suspense fallback={<LoadingSpinner/>}>
           <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading posts!</p>
          }
        >
          {(postResponse) => <Map items={postResponse.data}/>}
        </Await>

           </Suspense>
       
    </div>
     </div>
   
    );
}

export default ListPage