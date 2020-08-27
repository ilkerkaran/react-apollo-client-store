import {
  ApolloClient,
  // eslint-disable-next-line no-unused-vars
  NormalizedCacheObject,
  InMemoryCache
} from '@apollo/client';
import { FORM_DATA } from './queries';

export const cache = new InMemoryCache();
export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache
});
// initial cache state
cache.writeQuery({
  query: FORM_DATA,
  data: {
    formData: {
      inputText1: { defaultValue: 'def val1', value: null },
      inputNumber1: { defaultValue: 6, value: null },
      inputText2: { defaultValue: 'def val2', value: null }
    }
  }
});

// initial cache state
cache.writeQuery({
  query: FORM_DATA,
  data: {
    formData: {
      inputText1: { defaultValue: 'def val1', value: null },
      inputNumber1: { defaultValue: 6, value: null },
      inputText2: { defaultValue: 'def val2', value: null }
    }
  }
});
