import {FC} from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';

export const HeadTags: FC = ({children}) => {
  const {t} = useTranslation();

  return (
    <>
      <Helmet>
        <meta name="keywords" content={t('head-tags.keywords')} />
        <meta name="description" content={t('head-tags.description')} />
        <title>{t('head-tags.title')}</title>
      </Helmet>
      {children}
    </>
  );
};
