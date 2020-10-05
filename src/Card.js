import React from 'react';
import DetailView from 'terra-clinical-detail-view';
import LabelValueView from 'terra-clinical-label-value-view';
import classNames from 'classnames/bind';
import styles from './Card.css';
import "./Card.css" 
const cx = classNames.bind(styles);
const detail1title = 'Diabetes';
const detail1item1 = (<LabelValueView label="Age of onset" textValue="38 years" />);
const detail1item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);
const detail1item3 = (<LabelValueView label="Comments" textValue="Hypertension is another name for high blood pressure. It can lead to severe health complications and increase the risk of heart disease, stroke, and sometimes death. Blood pressure is the force that a person's blood exerts against the walls of their blood vessels." />);
const detail2title = 'Hypertension';
const detail2item1 = (<LabelValueView label="Age of onset" textValue="38" />);
const detail2item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);
const detail2item3 = (<LabelValueView label="Comments" textValue="Common factors that can lead to high blood pressure include: A diet high in salt, fat, and/or cholesterol. Chronic conditions such as kidney and hormone problems, diabetes, and high cholesterol. Family history, especially if your parents or other close relatives have high blood pressure. (Hollister MD, David 09/12/2011 11:34:12AM)" />);
const DetailViewDivided = () => (
  <div className={cx('detail-view-divided')}>
    <DetailView
      title="John Doe"
      subtitles={['Father (58 years)', '[second line for subtitles]']}
      details={[
        (
          <DetailView.DetailList title={detail1title} key="order-info-1">
            <DetailView.DetailListItem item={detail1item1} />
            <DetailView.DetailListItem item={detail1item2} />
            <DetailView.DetailListItem item={detail1item3} />
          </DetailView.DetailList>
        ),
        (
          <DetailView.DetailList title={detail2title} key="order-info-2">
            <DetailView.DetailListItem item={detail2item1} />
            <DetailView.DetailListItem item={detail2item2} />
            <DetailView.DetailListItem item={detail2item3} />
          </DetailView.DetailList>
        ),
      ]}
      footer="Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"
    />
  </div>
);
export default DetailViewDivided;