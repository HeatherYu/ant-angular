import { LooknowModule } from './looknow.module';

describe('LooknowModule', () => {
  let looknowModule: LooknowModule;

  beforeEach(() => {
    looknowModule = new LooknowModule();
  });

  it('should create an instance', () => {
    expect(looknowModule).toBeTruthy();
  });
});
