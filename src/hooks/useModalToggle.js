const useModalToggle = (idModal) => () => {
  const element = document.getElementById(idModal);
  element.classList.toggle("hidden");
};

export default useModalToggle;
