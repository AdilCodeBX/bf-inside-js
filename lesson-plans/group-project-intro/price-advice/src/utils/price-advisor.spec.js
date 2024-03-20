import { priceAdvisor } from './price-advisor';

describe('priceAdvisor: tells you if you should buy the product or not', () => {
  it('yes, yes, yes', () => {
    const actual = catAdvisor(true, true, true);
    expect(actual).toEqual('buy it!');
  });
  it('yes, yes, no', () => {
    const actual = priceAdvisor(true, true, false);
    expect(actual).toEqual('you need more money!');
  });
  it('yes, no, yes', () => {
    const actual = priceAdvisor(true, false, true);
    expect(actual).toEqual('Too expensive!');
  });
  it('yes, no, no', () => {
    const actual = priceAdvisor(true, false, false);
    expect(actual).toEqual('you have to work more');
  });
  it('no, yes, yes', () => {
    const actual = priceAdvisor(false, true, true);
    expect(actual).toEqual('i dont like it');
  });
  it('no, yes, no', () => {
    const actual = priceAdvisor(false, true, false);
    expect(actual).toEqual('nice price but i dont like it!');
  });
  it('no, no, yes', () => {
    const actual = priceAdvisor(false, false, true);
    expect(actual).toEqual('i can buy it but i dont want !');
  });
  it('no, no, no', () => {
    const actual = priceAdvisor(false, false, false);
    expect(actual).toEqual('you are doing great');
  });
});
