import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from './FoodCard';
import { useParams } from 'react-router-dom';

const ShopTabs = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  
  
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');



    return (
        <div className='mt-24' > 
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className='text-2xl font-inter uppercase font-medium text-center  '  >
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>soups</Tab>
        <Tab>desserts</Tab>
        <Tab> drinks</Tab>

      </TabList>
      <TabPanel> <div className='grid lg:grid-cols-3  gap-10  ' > { salad.map(item=> <FoodCard key={item._id} item={item} ></FoodCard>       )}               </div> </TabPanel>
      <TabPanel>   <div className='grid lg:grid-cols-3  gap-10  ' > { pizza.map(item=> <FoodCard key={item._id} item={item} ></FoodCard>  )}  </div>     </TabPanel>
      <TabPanel>    <div className='grid lg:grid-cols-3  gap-10  ' > { soup.map(item=> <FoodCard key={item._id} item={item} ></FoodCard>  )}  </div>      </TabPanel>
      <TabPanel>  <div className='grid lg:grid-cols-3  gap-10  ' > { desserts.map(item=> <FoodCard key={item._id} item={item} ></FoodCard>  )}  </div>          </TabPanel>
      <TabPanel> <div className='grid lg:grid-cols-3  gap-10  ' > { drinks.map(item=> <FoodCard key={item._id} item={item} ></FoodCard>  )}  </div>          </TabPanel>
    
    </Tabs>
        </div>
    );
};

export default ShopTabs;