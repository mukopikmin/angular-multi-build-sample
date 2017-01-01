import { Component1Component } from '../app/component1/component1.component';
import { Component2Component } from '../app/component2/component2.component';
import { Component3Component } from '../app/component3/component3.component';

export const environment = {
  production: true,
  routes: [
    {
      path: 'component1',
      component: Component1Component
    }, {
      path: 'component3',
      component: Component3Component
    }
  ]
};
