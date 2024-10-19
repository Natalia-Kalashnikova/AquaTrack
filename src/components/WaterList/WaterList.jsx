// import { useTranslation } from 'react-i18next';
// import css from "./WaterList.module.css";
// import WaterItem from "../WaterItem/WaterItem";
// import { useSelector } from "react-redux";
// import { selectWaterDayRecords } from "../../redux/water/selectors";

// const WaterList = ({ openWaterModal, setDeleteWaterModal, setWater }) => {
//     const { t } = useTranslation();
//     const waterList = useSelector(selectWaterDayRecords);

//     return (
//         <>
//             <ul className={css.waterList}>
//                 {waterList?.length > 0 ? (
//                     waterList?.map((item) => (
//                         <li key={item._id} className={css.waterItem}>
//                             <WaterItem
//                                 id={item._id}
//                                 amount={item.amount}
//                                 time={item.time}
//                                 openWaterModal={openWaterModal}
//                                 setDeleteWaterModal={setDeleteWaterModal}
//                                 setWater={setWater}
//                             />
//                         </li>
//                     ))
//                 ) : (
//                     <p className={css.noWater}>{t('waterList.noEntries')}</p>

//                 )}
//             </ul>
//         </>
//     );
// };

// export default WaterList;

import { useTranslation } from 'react-i18next';  
import css from "./WaterList.module.css";
import WaterItem from "../WaterItem/WaterItem";
import { useSelector } from "react-redux";
import { selectWaterDayRecords } from "../../redux/water/selectors";
import { useEffect, useRef } from 'react';

const WaterList = ({ openWaterModal, setDeleteWaterModal, setWater }) => {
    const { t } = useTranslation(); 
    const waterList = useSelector(selectWaterDayRecords);

    const lastItemRef = useRef(null);

    useEffect(() => {
        if (lastItemRef.current) {
            lastItemRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [waterList]);

    return (
        <div className={css.waterListContainer}> 
            <ul className={css.waterList}>
                {waterList?.length > 0 ? (
                    waterList?.map((item, index) => (
                        <li 
                            key={item._id} 
                            className={css.waterItem}
                            ref={index === waterList.length - 1 ? lastItemRef : null} 
                        >
                            <WaterItem
                                id={item._id}
                                amount={item.amount}
                                time={item.time}
                                openWaterModal={openWaterModal}
                                setDeleteWaterModal={setDeleteWaterModal}
                                setWater={setWater}
                            />
                        </li>
                    ))
                ) : (
                    <p className={css.noWater}>{t('waterList.noEntries')}</p>
                )}
            </ul>
        </div>
    );
};

export default WaterList;