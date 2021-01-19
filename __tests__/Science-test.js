/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import news from '../src/store/reducers/news';
import { scienceTypes } from '../src/store/actionTypes';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import Science from '../src/pages/Science';

jest.useFakeTimers();

describe('Science Reducer', () => {
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
    const posts = [{ title: 'test1' }, { title: 'test2' }, { title: 'test3' }];
    const newState = news(undefined, {
      type: scienceTypes.SUCCEEDED,
      payload: { scienceList: posts },
    });
    expect(newState.science).toEqual(posts);
  });
});

describe('Renders Science page correctly', () => {
  it('Should render without crashing', () => {
    renderer.create(
      <Provider store={store}>
        <Science />
      </Provider>,
    );
  });
});

describe('Science page Snapshot test', () => {
  test('Should be equal to snapshot', () => {
    const snap = renderer.create(
      <Provider store={store}>
        <Science />
      </Provider>,
    ).toJSON();

    expect(snap).toMatchSnapshot();
  });
});
