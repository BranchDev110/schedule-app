export interface IAuthContextType {
    token: string,
    setToken: (value: string) => void
}

export interface IClinic {
    id: number,
    name: string,
    address: string,
    city: string,
    state: string,
    zipcode: string
}

export interface IProvider {
    id: number,
    name: string,
    credentials: string,
    language: string,
    phoneNumber: string
}

export interface IAppointment {
    id: number,
    clinicId: number,
    durationInMinutes: number,
    provider: IProvider,
    startTime: string
}

export interface IAppointmentInfo {
    startTime: string,
    durationInMinutes: number
}

export interface IProviderAppointment extends IProvider{
    appointmentInfo: IAppointmentInfo[]
}

export interface IAppointments {
    [id: number]: IProviderAppointment
}

export interface ISchedule extends IClinic {
    appointments: IAppointments
}

export interface IDataContextType {
    appointments: ISchedule[],
    setAppointments: (value: ISchedule[]) => void
}
