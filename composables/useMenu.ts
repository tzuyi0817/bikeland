function useMenu() {
  const isShowMenu = useState('isShowMenu', () => false);

  function toggleMenu() {
    isShowMenu.value = !isShowMenu.value;
  }

  return {
    isShowMenu,
    toggleMenu,
  };
}

export default useMenu;
