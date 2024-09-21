import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import css from './WelcomeSection.module.css';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'EN' },
  ua: { nativeName: 'UA' },
};

const WelcomeSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={css.welcome_section__wrap}>
      <Logo />
      <div>
        {Object.keys(lngs).map((lng) => {
          return (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </button>
          );
        })}
      </div>

      <div className={css.welcome_section}>
        <div className={css.hero_section}>
          <p className={css.sub_head}>
            {t('Record daily water intake and track')}
          </p>
          <h1 className={css.main_head}>Water consumption tracker</h1>
        </div>

        <div className={css.buttons_block}>
          <Link
            to={'/signup'}
            className={`${css.button} ${css.button_to_signup}`}
          >
            Try tracker
          </Link>
          <Link
            to={'/signin'}
            className={`${css.button} ${css.button_to_signin}`}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
