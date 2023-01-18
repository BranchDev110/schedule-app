import { IProviderAppointment } from "../utils/types";

import '../styles/provider.scss';

type ProviderItemTypes = {
    data: IProviderAppointment
}

const ProviderItem = ({data}: ProviderItemTypes) => {
    const {name, credentials, phoneNumber, appointmentInfo} = data;
    return (
        <div className="provider__info">
            <p className="provider__info__name">{`${name}, ${credentials}`}</p>
            <p className="provider__info__phone">{`${phoneNumber}`}</p>
            <div className="provider__info__time">
            {
                appointmentInfo.map((item: any, index: number) => <div key={`S${index}`} className='provider__info__time__item'>{item.startTime}</div>)
            }
            </div>
        </div>
    )
}

export default ProviderItem;