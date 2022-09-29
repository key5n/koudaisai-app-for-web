import styles from "styles/components.module.css";
import UserObject from "./userObject";
import AddCompanion from "./addCompanion";

const UserObjectWrapper: React.FC = () => {
  return (
    <div className={styles.userObjectWrapper}>
      <UserObject name={"落単古墳マン"} />
      <AddCompanion />
    </div>
  );
};

export default UserObjectWrapper;
