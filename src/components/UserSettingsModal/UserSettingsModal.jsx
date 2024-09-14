import css from './UserSettingsModal.module.css';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm.jsx';

const UserSettingsModal = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Setting</h1>
        <UserSettingsForm />
      </div>
    </>
  );
};

export default UserSettingsModal;
