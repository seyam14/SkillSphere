import { useLoaderData } from 'react-router-dom';
import {  Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import CategoryCard from '../Category/CategoryCard';

const CourseCategory = () => {
    const data =useLoaderData();
    console.log(data);
  
 const [searchQuery, setSearchQuery] = useState('');

 const handleSearch = (e) => {
   setSearchQuery(e.target.value);
 };

 const filteredData = data.filter((item) =>
   item.Description.toLowerCase().includes(searchQuery.toLowerCase())
 );


   return (
     <div>
        <div className='m-16'>
     <input
       type="text"
       placeholder="Search here..."
       value={searchQuery}
       onChange={handleSearch}
       className="border border-red-300 px-4 py-2 rounded-full outline-none"/>
       </div>
       <Tabs className='mt-5'> 
       <TabPanel>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
           {filteredData.map((cart) => (
             <CategoryCard cart={cart} key={cart._id} />
           ))}
         </div>
       </TabPanel>
     </Tabs>
     </div>
   );
};


export default CourseCategory;