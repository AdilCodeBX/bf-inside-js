/**
 *
 * @param {boolean} likePrice
 * @param {boolean} happyPrice
 * @param {boolean} noMatter
 * @returns {boolean}
 */
export const priceAdvisor = (likePrice, happyPrice, noMatter) => {
  debugger;
  return likePrice && happyPrice && noMatter
    ? 'buy it!'
    : likePrice && happyPrice && !noMatter
    ? 'you need more money!'
    : likePrice && !happyPrice && noMatter
    ? 'Too expensive!'
    : likePrice && !happyPrice && !noMatter
    ? 'you have to work more'
    : !likePrice && happyPrice && noMatter
    ? 'i dont like it'
    : !likePrice && happyPrice && !noMatter
    ? 'nice price but i dont like it!'
    : !likePrice && !happyPrice && noMatter
    ? 'i can buy it but i dont want !'
    : // !likesCats && !isAllergic && !ownsOne
      'you are doing great';
};
