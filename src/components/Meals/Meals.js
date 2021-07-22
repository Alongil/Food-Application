import React from 'react';
import AvailableMeals from './AvailableMelas';
import MealsSummery from './MealsSummery';

const Meals = (props) => {

  return (
    <>
      <MealsSummery />
      <AvailableMeals />
    </>
  );
};

export default Meals;