import React, { useMemo, useId, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const useTranslate = (content: string) => {
    const { t } = useTranslation();
    // const state: string = useMemo(() => t(content), []);
    const state: string =  t(content);
    return state
}

type ISpanProps = {
    children: string,
    className?: string,
    [key: string]: any
}

const map: { [key: string]: any } = {};

export const Span = (props: ISpanProps) => {
    const { children, className } = props;
    const content = useTranslate(children);
    const htmlId = useId();
    const location = useLocation();
    useEffect(() => {
        if (map[children]) {
            map[children].push({ htmlId: location.pathname })
        } else {
            map[children] = [{ htmlId: location.pathname }]
        }
    }, [])

    return <span data-id={'htmlId-' + htmlId} className={'highlight-span ' + className}>{content}</span>
}

export default { useTranslate, Span }