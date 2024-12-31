import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { handleLocalStorage } from '../Common/handleLocalStorage';

export  function useCurrentLanguage() {
    const { i18n } = useTranslation();
    useEffect(() => {
        const currentLanguage = handleLocalStorage.get('language');
        if(currentLanguage) {
            i18n.changeLanguage(currentLanguage);
        }
      }, [i18n])
    return;
}
