import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';


const Category = () => {
    const data =useLoaderData();
     console.log(data);

  const filter = data?.filter(p => p.category.includes('Web Development'));
  const filter2 = data?.filter(p => p.category.includes('Digital Marketing'));
  const filter3 = data?.filter(p => p.category.includes('Graphics Design'));
  const filter4 = data?.filter(p => p.category.includes('others'));
  console.log(filter);
   


    return (
        <Tabs className='mt-5'> 
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphic Design</Tab>
          <Tab>others</Tab>
        </TabList>
    
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter?.map((cart) => (
              <CategoryCard cart={cart} key={cart.id}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter2?.map((cart) => (
              <CategoryCard cart={cart} key={cart.id}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter3?.map((cart) => (
              <CategoryCard cart={cart} key={cart.id}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter4?.map((cart) => (
              <CategoryCard cart={cart} key={cart.id}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    );
};

export default Category;