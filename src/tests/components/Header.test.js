import React from 'react';
import { shallow } from 'enzyme';
// If you have no serializer in 'jest.config.json'
//import toJSON from 'enzyme-to-json';
// Alternative to Enzyme:
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
   const wrapper = shallow(<Header />);
   // Simple Enzyme example
   //expect(wrapper.find('h1').text()).toBe('Expensify');
   expect(wrapper).toMatchSnapshot();

   // Reach Shallow Renderer
   // const renderer = new ReactShallowRenderer();
   // renderer.render(<Header />);
   // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
