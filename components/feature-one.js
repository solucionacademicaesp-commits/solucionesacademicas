import { FeatureOneData } from "@/data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

const FeatureOne = () => {

  const t = useTranslations('Index');
  const [feature1, setFeature1] = useState(true);
  const [feature2, setFeature2] = useState(true);
  const [feature3, setFeature3] = useState(true);
  const [feature4, setFeature4] = useState(true);
  const [feature5, setFeature5] = useState(true);
  return (
    <div className="feature_service_area text-center">
      {feature1 ?
        <div className="feature_service_box_width" onMouseOver={() => setFeature1(false)} >
          <i className="icon-handshake"></i>
          <p>{t('FeatureOneData_Feature1_1')}</p>
        </div>
        :
        <div className="feature_service_box_width" onMouseOut={() => setFeature1(true)}>
          <p>{t('FeatureOneData_Feature1_2')}</p>
        </div>
      }
      {feature2 ?
        <div className="feature_service_box_width" onMouseOver={() => setFeature2(false)} >
          <i className="icon-diploma"></i>
          <p>{t('FeatureOneData_Feature2_1')}</p>
        </div>
        :
        <div className="feature_service_box_width" onMouseOut={() => setFeature2(true)}>
          <p>{t('FeatureOneData_Feature2_2')}</p>
        </div>
      }
      {feature3 ?
        <div className="feature_service_box_width" onMouseOver={() => setFeature3(false)} >
          <i className="icon-phone-miscall"></i>
          <p>{t('FeatureOneData_Feature3_1')}</p>
        </div>
        :
        <div className="feature_service_box_width" onMouseOut={() => setFeature3(true)}>
          <p>{t('FeatureOneData_Feature3_2')}  </p>
        </div>
      }
      {feature4 ?
        <div className="feature_service_box_width" onMouseOver={() => setFeature4(false)} >
          <i className="icon-support"></i>
          <p>{t('FeatureOneData_Feature4_1')}</p>
        </div>
        :
        <div className="feature_service_box_width" onMouseOut={() => setFeature4(true)}>
          <p>{t('FeatureOneData_Feature4_2')}</p>
        </div>
      }
      {feature5 ?
        <div className="feature_service_box_width" onMouseOver={() => setFeature5(false)} >
          <i className="icon-fire"></i>
          <p>{t('FeatureOneData_Feature5_1')}</p>
        </div>
        :
        <div className="feature_service_box_width" onMouseOut={() => setFeature5(true)}>
          <p>{t('FeatureOneData_Feature5_2')}</p>
        </div>
      }

    </div>
  );
};

export default FeatureOne;
