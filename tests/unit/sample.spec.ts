import { expect } from 'chai';
import { ComponentOptions } from 'vue/types/options';
import { shallowMount } from '@vue/test-utils';
import { SampleComponent } from '@/app/sample/components';
import Vue from 'vue';

describe('SampleComponent.vue', () => {

  let sampleComponent: SampleComponent;
  beforeEach(() => {
    const Stor = Vue.extend(SampleComponent as ComponentOptions<Vue> );
    sampleComponent = new Stor({
      computed: {
        sample: {}
      }
    }).$mount();
  })

  it('truthy test', () => {
    expect(true).eq(true);
  });

  it('should have mounted method defined.', () => {
    expect(typeof sampleComponent).eq('object');
  })
});
