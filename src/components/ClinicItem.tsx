import { IProviderAppointment, ISchedule } from '../utils/types';
import ProviderItem from './ProviderItem';

import '../styles/appointment.scss';

type ClinicItemTypes = {
    data: ISchedule
}

const ClinicItem = ({data}: ClinicItemTypes) => {
    const {name, address, city, state, zipcode, appointments} = data;
    return (
        <div className='clinic__content'>
            <div className='clinic__content__image'>
                <img src='image.png' alt='steven'/>
            </div>
            <div className='clinic__content__info'>
                <p className='clinic__content__info__name'>{name}</p>
                <p className='clinic__content__info__address'>{address}</p>
                <p className='clinic__content__info__address'>{`${city}, ${state} ${zipcode}`}</p>
                <div className='provider__content'>
                    {
                        Object.entries(appointments).map(([key, value]: [string, IProviderAppointment]) => {
                            return <ProviderItem key={`P${key}`} data={value}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ClinicItem;