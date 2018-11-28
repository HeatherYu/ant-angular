import { LazyTestModule } from './lazy-test.module';

describe('LazyTestModule', () => {
  let lazyTestModule: LazyTestModule;

  beforeEach(() => {
    lazyTestModule = new LazyTestModule();
  });

  it('should create an instance', () => {
    expect(lazyTestModule).toBeTruthy();
  });
});
