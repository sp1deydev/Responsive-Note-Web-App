import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { handleLocalStorage } from '../Common/handleLocalStorage';

export  function useCurrentLanguage() {
    const { i18n } = useTranslation();
    useEffect(() => {
        let currentLanguage = handleLocalStorage.get('language');
        if(!currentLanguage) {
            currentLanguage = 'en';
        }
        if(currentLanguage) {
            i18n.changeLanguage(currentLanguage);
        }
      }, [i18n])
    return;
}
