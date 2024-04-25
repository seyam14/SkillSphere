import { useLoaderData } from 'react-router-dom';
import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../Category/CategoryCard';

const CourseCategory = () => {
    const data = useLoaderData();
    console.log(data);
  
    return (
        <div>
            <Tabs className='mt-5'> 
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
                        {data.map((cart) => (
                            <CategoryCard cart={cart} key={cart._id} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CourseCategory;
