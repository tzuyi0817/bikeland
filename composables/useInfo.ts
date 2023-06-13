function useInfo() {
  const isShowInfo = useState('isShowInfo', () => false);

  function toggleInfo() {
    isShowInfo.value = !isShowInfo.value;
  }

  return {
    isShowInfo,
    toggleInfo,
  };
}

export default useInfo;
