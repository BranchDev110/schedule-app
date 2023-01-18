import { useContext, useEffect } from 'react';
import ClinicItem from '../components/ClinicItem';
import { AuthContext } from '../context/AuthContext';
import { DataContext } from '../context/DataContext';
import { IAppointment, IClinic } from '../utils/types';

import '../styles/main.scss';

const Dashboard = () => {
    const {token} = useContext(AuthContext);
    const {appointments, setAppointments} = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            const clinicResponse = await fetch('/api/clinics', {headers: {Authorization: token}});
            const { clinics } = await clinicResponse.json();
    
            const appointmentResponse = await fetch('/api/appointments', {headers: {Authorization: token}});
            const { appointmentSlots } = await appointmentResponse.json();
    
            const data = clinics.map((cur: IClinic) => {
                const appointments: any = {};
                const filteredAppointments = appointmentSlots.filter((item: IAppointment) => item.clinicId === cur.id);
                filteredAppointments.forEach((appointment: IAppointment) => {
                    const {provider, startTime, durationInMinutes} = appointment;
                    const {id, ...rest} = provider;
                    if(appointments[id]) {
                        appointments[id].appointmentInfo.push({startTime, durationInMinutes});
                    } else {
                        appointments[id] = {...rest, appointmentInfo:[{startTime, durationInMinutes}]};
                    }
                })
                return {...cur, appointments};
            }, []);
            
            setAppointments(data);
        }
        fetchData();
    }, [])

    return (
        <div className='container'>
            {
                appointments.map(item => {
                    return <ClinicItem key={item.id} data={item}/>
                })
            }
        </div>
    )
}

export default Dashboard;