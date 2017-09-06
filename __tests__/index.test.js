import React, { Component } from 'react'
import Index from '../app/index'
import { shallow } from 'enzyme'

test('Component: index.js renders correctly', () => {
    const component = shallow(
            <Index />
    );
    expect(component).toMatchSnapshot();
})
