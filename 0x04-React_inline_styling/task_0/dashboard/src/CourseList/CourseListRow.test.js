#!/usr/bin/node
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders one cell with colspan = 2 when textSecondCell is null and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell={null} />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
    expect(th.text()).toEqual('Header');
    expect(wrapper.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders two cells when textSecondCell is not null and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />);
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.at(0).text()).toEqual('Header');
    expect(th.at(1).text()).toEqual('Subheader');
    expect(wrapper.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />);
    const td = wrapper.find('td');
    expect(td).toHaveLength(2);
    expect(td.at(0).text()).toEqual('Data1');
    expect(td.at(1).text()).toEqual('Data2');
    expect(wrapper.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});
