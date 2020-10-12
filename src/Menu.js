import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import MenuRow from './components/MenuRow';

const Menu = () => {
  const menu_data = [
    {
      id: 0,
      title: 'Soups',
      desc: 'Delicious traditional Turkish soups',
      isActive: false,
      color: 'yellow',
    },
    {
      id: 1,
      title: 'Snacks',
      desc: 'You will love our snacks',
      isActive: true,
      color: 'cyan',
    },
    {
      id: 2,
      title: 'Main Courses',
      desc: 'We guarantee you will be full',
      isActive: false,
      color: 'green',
    },
    {
      id: 3,
      title: 'Alcoholic Beverages',
      desc: 'Tastes to cool you down as you drink',
      isActive: false,
      color: 'orange',
    },
    {
      id: 4,
      title: 'Soft Drinks',
      desc: "You haven't eaten such things before",
      color: '#c5e1a5',
      isActive: true,
    },
  ];
  return (
    <View style={{backgroundColor:"#e0e0e0", flex:1}}>
      <ScrollView>
        {menu_data.map((item) => {
          return (
            <MenuRow
              name={item.title}
              desc={item.desc}
              isActive={item.isActive}
              color={item.color}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Menu;
