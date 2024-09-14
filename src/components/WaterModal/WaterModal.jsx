import WaterForm from "../WaterForm/WaterForm.jsx";
import css from '../WaterModal/WaterModal.module.css';

const WaterModal = ({operationType = "add"}) => {
  return (
    <div className={css.waterModal}>
      <h1>{operationType === "add" ? "Add water" : "Edit the entered amount of water"} </h1>           
      <WaterForm/>
    </div>
  );
};

export default WaterModal;