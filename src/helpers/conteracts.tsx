export interface BurgerMenuInterfaceProps {
  handleOutsideClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
}
