import type { BikeInfo } from '@/types/bike';

function useCard() {
  const isShowCard = useState('isShowCard', () => false);
  const cardInfo = useState<Partial<BikeInfo>>('cardInfo', () => ({}));

  function toggleCard(isShow: boolean, info: Partial<BikeInfo> = {}) {
    cardInfo.value = info;
    isShowCard.value = isShow;
  }

  return {
    isShowCard,
    cardInfo,
    toggleCard,
  };
}

export default useCard;
