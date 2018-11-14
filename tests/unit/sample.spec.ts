import { expect } from 'chai';
import { ComponentOptions } from 'vue/types/options';
import { shallowMount } from '@vue/test-utils';
import { SampleComponent } from '@/app/sample/components';
import Vue from 'vue';

describe('SampleComponent.vue', () => {

  it('truthy test', () => {
    expect(true).eq(true);
  });
});
