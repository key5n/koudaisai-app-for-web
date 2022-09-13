import { FC } from "react";
import styles from "styles/reservation.module.css";
import ReservationOrLogin from "components/organisms/home";
import Authentication from "components/organisms/authentication";
import Checkbox from "components/molecules/checkbox";

const Tickets: FC = () => {
  return (
    <main>
      <ReservationOrLogin />
      <Authentication />
      <Checkbox />
    </main>
  );
};

export default Tickets;
