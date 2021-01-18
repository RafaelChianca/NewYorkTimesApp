/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { technologyTypes } from '../src/store/actionTypes';
import news from '../src/store/reducers/news';
import Technology from '../src/pages/Technology';
import { Provider } from 'react-redux';
import { store } from '../src/store';

jest.useFakeTimers();

describe('Technology Reducer', () => {
  it('Should return dafault state', () => {
    const newState = news(undefined, {});
    expect(newState).toEqual({
      error: false,
      loading: false,
      technology: [],
      science: [],
    });
  });

  it('Should return new state if receiving type', () => {
    const posts = [{ title: 'test1' }, { title: 'test2' }, { title: 'test3' }]
    const newState = news(undefined, {
      type: technologyTypes.SUCCEEDED,
      payload: {technologyList: posts}
    });
    expect(newState.technology).toEqual(posts);
  });
});

describe('Renders Technology page correctly', () => {
  it('Should render without crashing', () => {
    renderer.create(
      <Provider store={store}>
        <Technology/>
      </Provider>
    );
  })
});
