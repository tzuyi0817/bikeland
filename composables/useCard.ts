import type { BikeInfo } from '@/types/bike';

function useCard() {
  const isShowCard = useState('isShowCard', () => false);
  const cardInfo = useState<Partial<BikeInfo>>('cardInfo', () => ({}));

  function toggleCard(info: Partial<BikeInfo> = {}) {
    cardInfo.value = info;
    isShowCard.value = !isShowCard.value;
  }

  return {
    isShowCard,
    toggleCard,
  };
}

export default useCard;
