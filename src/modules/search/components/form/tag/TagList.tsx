import React from 'react';
import { IconCross } from 'hds-react';
import styles from './TagList.module.scss';
import useFilters from '../../../../../hooks/useFilters';
import { FilterConfigs, FilterName, FilterType, ParamList } from '../../../../../types/common';
import { useTranslation } from 'react-i18next';

type Props = {
  config: FilterConfigs;
};

const TagList = ({ config }: Props) => {
  const { clearFilter, removeFilter, getAllFilters } = useFilters();
  const { t } = useTranslation();

  const params = getAllFilters().reduce((all: ParamList, [name, value]) => {
    const { getTagLabel } = config[name] || {};
    if (getTagLabel) {
      return [...all, ...getTagLabel(value)];
    }
    return all;
  }, []);

  const handleClick = (name: FilterName, value: string) => () =>
    config[name].type === FilterType.MultiSelect ? removeFilter(name, value) : clearFilter(name);

  return (
    <div className={styles.container}>
      {params.map(([name, value, label], index) => (
        <button
          key={index}
          className={styles.tag}
          onClick={handleClick(name, value)}
          aria-label={`${t('SEARCH:remove-tag')} ${name} ${t(`ES:${label || value}`)}`}
        >
          <IconCross className={styles.icon} />
          <span className={styles.label}>{t(`ES:${label || value}`)}</span>
        </button>
      ))}
    </div>
  );
};

export default TagList;
