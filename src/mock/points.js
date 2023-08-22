import { getDate } from '../utils/utils.js';
import { getRandomInt } from '../utils/common.js';

const generateMockPoints = (type, destinationId, offerIds) => ({
  id: crypto.randomUUID(),
  basePrice: getRandomInt(1, 10000),
  dateFrom: getDate({next:false}),
  dateTo: getDate({next:true}),
  destination: destinationId,
  isFavorite: !!getRandomInt(0,1),
  offers: offerIds,
  type
});

export{generateMockPoints};
